package com.backendPosteroid.posteroids.dto;

public record ShippingAddressRequest(String name, String phone, String addressLine1, String addressLine2,
                                     String city, String region, String postalCode, String countryCode) {}
