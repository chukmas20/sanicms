import { Button, List, ListItem, TextField, Typography } from '@mui/material';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import CheckoutWizard from '../components/CheckoutWizard';
import Form from '../components/Form';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

const ShippingSCreen = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue
      } = useForm();

      const router = useRouter()

      const { state, dispatch } = useContext(Store);
      const { userInfo, cart:{shippingAddress} } = state;

      useEffect(()=>{
         if(!userInfo){
             return router.push("/login?redirect=/shipping")
         }
         setValue('fullName', shippingAddress.fullName)
         setValue('fullName', shippingAddress.address)
         setValue('fullName', shippingAddress.city)
         setValue('fullName', shippingAddress.postalCode)
         setValue('fullName', shippingAddress.country)

      }, [router, shippingAddress,userInfo,setValue])

      const submitHandler = ({ fullName, address, city, postalCode, country }) => {
        dispatch({
          type: 'SAVE_SHIPPING_ADDRESS',
          payload: { fullName, address, city, postalCode, country },
        });
        jsCookie.set(
          'shippingAddress',
          JSON.stringify({
            fullName,
            address,
            city,
            postalCode,
            country,
          })
        );
        router.push('/payment');
      };
  return (
    <Layout title="Shipping Address">
        <CheckoutWizard activeStep={1}></CheckoutWizard>
        <Form onSubmit={handleSubmit(submitHandler)}>
             <Typography variant="h1" component="h1">
                 SHipping Address
             </Typography>
             <List>
             <ListItem>
                    <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 2,
                    }}
                    render={({ field }) => (
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="fullName"
                        label="fullName"
                        inputProps={{ type: 'fullName'}}
                        error={Boolean(errors.fullName)}
                        helperText={
                            errors.fullName
                            ? errors.fullName.type === 'minLength'
                                ? 'FullName length shoiuld be more than 1 character'
                                : 'FullName is required'
                            : ''
                        }
                        {...field}
                        ></TextField>
                    )}
                    ></Controller>
               </ListItem>
               <ListItem>
                    <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 2,
                    }}
                    render={({ field }) => (
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="address"
                        label="address"
                        inputProps={{ type: 'address'}}
                        error={Boolean(errors.fullName)}
                        helperText={
                            errors.address
                            ? errors.address.type === 'minLength'
                                ? 'Address length should be more than 1 character'
                                : 'Address is required'
                            : ''
                        }
                        {...field}
                        ></TextField>
                    )}
                    ></Controller>
               </ListItem>
               <ListItem>
                    <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 2,
                    }}
                    render={({ field }) => (
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="city"
                        label="city"
                        inputProps={{ type: 'city'}}
                        error={Boolean(errors.fullName)}
                        helperText={
                            errors.city
                            ? errors.city.type === 'minLength'
                                ? 'City length should be more than 1'
                                : 'City  is required'
                            : ''
                        }
                        {...field}
                        ></TextField>
                    )}
                    ></Controller>
               </ListItem>
               <ListItem>
                    <Controller
                    name="postalCode"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 2,
                    }}
                    render={({ field }) => (
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="postalCode"
                        label="Postal Code"
                        inputProps={{ type: 'postalCode'}}
                        error={Boolean(errors.postalCode)}
                        helperText={
                            errors.postalCode
                            ? errors.postalCode.type === 'minLength'
                                ? 'Postal Code length should be more than 1 character'
                                : 'Postal Code  is required'
                            : ''
                        }
                        {...field}
                        ></TextField>
                    )}
                    ></Controller>
               </ListItem>
               <ListItem>
                    <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 2,
                    }}
                    render={({ field }) => (
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="country"
                        label="Country"
                        inputProps={{ type: 'country'}}
                        error={Boolean(errors.country)}
                        helperText={
                            errors.country
                            ? errors.country.type === 'minLength'
                                ? 'Country length should be more than 1 character'
                                : 'Country  is required'
                            : ''
                        }
                        {...field}
                        ></TextField>
                    )}
                    ></Controller>
               </ListItem>
               <ListItem>
                    <Button variant="contained" type="submit" fullWidth color="secondary">
                         Continue
                    </Button>
               </ListItem>
             </List>
        </Form>
    </Layout>
  )
}

export default ShippingSCreen;