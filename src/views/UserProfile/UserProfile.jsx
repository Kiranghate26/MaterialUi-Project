import React from 'react';
import {
    Grid, InputLabel,
} from '@material-ui/core';

import {
    ProfileCard, RegularCard, Button, CustomInput, ItemGrid
} from 'components';

import avatar from 'assets/img/faces/kiran.jpg';

const UserProfile = () => {
    return (
        <div>
            <Grid container>
                <ItemGrid xs={12} sm={12} md={8}>
                    <RegularCard
                        cardTitle="Edit Profile"
                        cardSubtitle="Complete your profile"
                        content={
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={5}>
                                        <CustomInput
                                            labelText="Company (disabled)"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                disabled: true
                                            }}
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Username"
                                            id="username"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Email address"
                                            id="email-address"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                </Grid>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="First Name"
                                            id="first-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Last Name"
                                            id="last-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                </Grid>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="City"
                                            id="city"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Country"
                                            id="country"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Postal Code"
                                            id="postal-code"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </ItemGrid>
                                </Grid>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                        <InputLabel style={{color: '#AAAAAA'}}>About me</InputLabel>
                                        <CustomInput
                                            labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                            id="about-me"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                multiline: true,
                                                rows: 5
                                            }}
                                        />
                                    </ItemGrid>
                                </Grid>
                            </div>
                        }
                        footer={
                            <Button color="primary">Update Profile</Button>
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={4}>
                    <ProfileCard
                        avatar={avatar}
                        subtitle="Software Engineer"
                        title="Kiran Ghate"
                        description="Even if no one else takes the time to tell you, remember that your worth isn't determined by external validation. It comes from within you. Embrace your individuality, celebrate your strengths, and learn from your challenges...."
                        footer={
                            <Button color="primary" round>Follow</Button>
                        }
                    />
                </ItemGrid>
            </Grid>
        </div>
    );
}

export default UserProfile;
