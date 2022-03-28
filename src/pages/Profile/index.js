import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  Container,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useCallback, useEffect, useState } from "react";
import './style.css'



function Profile() {
  
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: user } = await api.auth.updateProfile(data);

      auth.setUser(user);
      setIsOpen(true);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = useCallback(async () => {
    const { data } = await api.auth.getProfile();

    reset({
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }, [reset]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container maxWidth='xl' >
    <div className="profile-background">
    <Container  maxWidth="xs" className="profile-form">
    
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className="form-header" variant="h6">Update profile</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.firstName?.message)}
                  fullWidth={true}
                  label="First name"
                  variant="filled"
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.lastName?.message)}
                  fullWidth={true}
                  label="Last name"
                  variant="filled"
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="default"
              type="submit"
              disabled={isLoading}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message="Profile updated successfully"
      />
      
    </Container>
    </div>
    </Container>
  );
}

export default Profile;
