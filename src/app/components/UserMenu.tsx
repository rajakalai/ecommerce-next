'use client'
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShopIcon from '@mui/icons-material/Shop';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 3,
      border: `2px solid ${theme.palette.background.paper}`,
      color: 'black',
      backgroundColor: 'white',
      padding: '0 4px',
    },
}));

const UserMenu: React.FC = () => {
    console.log('data', Array.from(Array(5)))
    return (
        <>
            <ul className="flex gap-4">
                <li>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4}>
                            <ShopIcon />
                        </StyledBadge>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <LocalShippingIcon />
                        </StyledBadge>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="cart">
                            <AccountCircleIcon />
                    </IconButton>
                </li>
            </ul>
        </>      
    )
}

export default UserMenu