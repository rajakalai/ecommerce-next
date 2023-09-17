'use client'
import React from "react";
import Image from "next/image";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShopIcon from '@mui/icons-material/Shop';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const Header: React.FC = () => {
    console.log('data', Array.from(Array(5)))
    return (
        <div className="grid grid-cols-12 gap-4 h-20 px-4 items-center">
           <div className="col-span-2">
                <Image src='./next.svg' alt='' width={100} height={100}/>
           </div>
           <div className="col-span-4">
                <input type="text" placeholder="search" className="border  w-100 h-10 ring-pink-500"/>
            </div>
            <div className="col-span-6">
                <ul className="flex gap-4">
                    <li>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShopIcon />
                        </StyledBadge>
                    </IconButton>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <LocalShippingIcon />
                        </StyledBadge>
                    </IconButton>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <AccountCircleIcon />
                        </StyledBadge>
                    </IconButton>
                    </li>
                    <li> <LocalShippingIcon className="mr-3" />track orders</li>
                    <li> <AccountCircleIcon className="mr-3" /> signin</li>
                </ul>

            </div>
        </div>
    )
}

export default Header