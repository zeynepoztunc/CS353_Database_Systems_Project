package com.example.werent.controller;

import com.example.werent.entity.WishlistsDTO;
import com.example.werent.repository.WishlistsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/wishlists")
public class WishlistsController
{
    private WishlistsRepository wishlistsDepository;
    @Autowired
    public WishlistsController(WishlistsRepository wishlistsDepository)
    {
        this.wishlistsDepository = wishlistsDepository;
    }

    @PostMapping("/addWishlist")
    public void addWishlist(WishlistsDTO wishlistsDTO)
    {
        wishlistsDepository.addWishlist(wishlistsDTO.getUserId(),wishlistsDTO.getRentalId(),wishlistsDTO.getDate().toString());
    }

}
