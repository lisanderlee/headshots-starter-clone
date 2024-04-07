// /* @ts-ignore */
// function UpdatePreviewUrlsAndSetProduct() {

const data = {
    "data": [
        {
            "id": 649144108,
            "status": "completed",
            "catalog_variant_mockups": [
                {
                    "catalog_variant_id": 10457,
                    "mockups": [
                        {
                            "placement": "front",
                            "display_name": "Front print",
                            "technique": "dtg",
                            "style_id": 19423,
                            "mockup_url": "https://printful-upload.s3-accelerate.amazonaws.com/tmp/01ab1cb48d53e6b20e2f752be8dc0c1b/eco-tote-bag-black-front-661075d040ac5.jpg"
                        }
                    ]
                },
                {
                    "catalog_variant_id": 10458,
                    "mockups": [
                        {
                            "placement": "front",
                            "display_name": "Front print",
                            "technique": "dtg",
                            "style_id": 19423,
                            "mockup_url": "https://printful-upload.s3-accelerate.amazonaws.com/tmp/05aa4eff06963de3d13d67e82c9cc532/eco-tote-bag-oyster-front-661075d04156e.jpg"
                        }
                    ]
                }
            ],
            "failure_reasons": [],
            "_links": {
                "self": {
                    "href": "https://api.printful.com/v2/mockup-tasks?id=649144108"
                }
            }
        }
    ],
    "extra": [],
    "paging": {
        "total": 1,
        "offset": 0,
        "limit": 20
    },
    "_links": {
        "self": {
            "href": "https://api.printful.com/v2/mockup-tasks?limit=20"
        }
    }
}
// const product= [
//     {
//         "id": 339615790,
//         "external_id": "6605e9a0e71467",
//         "name": "Eco Tote Bag",
//         "variants": [
//             {
//                 "id": 4309135589,
//                 "external_id": "6605e9a0e71548",
//                 "sync_product_id": 339615790,
//                 "name": "Eco Tote Bag - Black",
//                 "synced": true,
//                 "variant_id": 10457,
//                 "main_category_id": 48,
//                 "warehouse_product_variant_id": null,
//                 "retail_price": "21.00",
//                 "sku": "6605E9A0E6D49_Black",
//                 "currency": "USD",
//                 "product": {
//                     "variant_id": 10457,
//                     "product_id": 367,
//                     "image": "https://files.cdn.printful.com/products/367/10457_1582200790.jpg",
//                     "name": "Econscious EC8000 Organic Cotton Tote Bag (Black / One size)"
//                 },
//                 "files": [
//                     {
//                         "id": 687290893,
//                         "type": "default",
//                         "hash": null,
//                         "url": null,
//                         "filename": "481b73087411e97f38673f6d5c52c9e5.png",
//                         "mime_type": "image/png",
//                         "size": 0,
//                         "width": 1500,
//                         "height": 1500,
//                         "dpi": 150,
//                         "status": "ok",
//                         "created": 1711663518,
//                         "thumbnail_url": "https://files.cdn.printful.com/printfile-preview/687290893/481b73087411e97f38673f6d5c52c9e5_thumb.png",
//                         "preview_url": "https://files.cdn.printful.com/printfile-preview/687290893/481b73087411e97f38673f6d5c52c9e5_preview.png",
//                         "visible": false,
//                         "is_temporary": true,
//                         "message": "",
//                         "stitch_count_tier": null
//                     },
//                     {
//                         "id": 687290921,
//                         "type": "preview",
//                         "hash": "ae4749bba1bd10c166ad91e19ef7c7f7",
//                         "url": null,
//                         "filename": "eco-tote-bag-black-front-6605e99ebcc6e.jpg",
//                         "mime_type": "image/jpeg",
//                         "size": 49574,
//                         "width": 1000,
//                         "height": 1000,
//                         "dpi": null,
//                         "status": "ok",
//                         "created": 1711663520,
//                         "thumbnail_url": "https://files.cdn.printful.com/files/ae4/ae4749bba1bd10c166ad91e19ef7c7f7_thumb.png",
//                         "preview_url": "https://files.cdn.printful.com/files/ae4/ae4749bba1bd10c166ad91e19ef7c7f7_preview.png",
//                         "visible": false,
//                         "is_temporary": false,
//                         "message": "",
//                         "stitch_count_tier": null
//                     }
//                 ],
//                 "options": [
//                     {
//                         "id": "embroidery_type",
//                         "value": "flat"
//                     },
//                     {
//                         "id": "thread_colors",
//                         "value": []
//                     },
//                     {
//                         "id": "text_thread_colors",
//                         "value": []
//                     },
//                     {
//                         "id": "thread_colors_3d",
//                         "value": []
//                     },
//                     {
//                         "id": "thread_colors_apparel",
//                         "value": []
//                     },
//                     {
//                         "id": "text_thread_colors_apparel",
//                         "value": []
//                     },
//                     {
//                         "id": "lifelike",
//                         "value": false
//                     }
//                 ],
//                 "is_ignored": false,
//                 "size": "One size",
//                 "color": "Black",
//                 "availability_status": "active"
//             },
//             {
//                 "id": 4309135590,
//                 "external_id": "6605e9a0e715b5",
//                 "sync_product_id": 339615790,
//                 "name": "Eco Tote Bag - Oyster",
//                 "synced": true,
//                 "variant_id": 10458,
//                 "main_category_id": 48,
//                 "warehouse_product_variant_id": null,
//                 "retail_price": "21.00",
//                 "sku": "6605E9A0E6D49_Oyster",
//                 "currency": "USD",
//                 "product": {
//                     "variant_id": 10458,
//                     "product_id": 367,
//                     "image": "https://files.cdn.printful.com/products/367/10458_1642499411.jpg",
//                     "name": "Econscious EC8000 Organic Cotton Tote Bag (Oyster / One size)"
//                 },
//                 "files": [
//                     {
//                         "id": 687290893,
//                         "type": "default",
//                         "hash": null,
//                         "url": null,
//                         "filename": "481b73087411e97f38673f6d5c52c9e5.png",
//                         "mime_type": "image/png",
//                         "size": 0,
//                         "width": 1500,
//                         "height": 1500,
//                         "dpi": 150,
//                         "status": "ok",
//                         "created": 1711663518,
//                         "thumbnail_url": "https://files.cdn.printful.com/printfile-preview/687290893/481b73087411e97f38673f6d5c52c9e5_thumb.png",
//                         "preview_url": "https://files.cdn.printful.com/printfile-preview/687290893/481b73087411e97f38673f6d5c52c9e5_preview.png",
//                         "visible": false,
//                         "is_temporary": true,
//                         "message": "",
//                         "stitch_count_tier": null
//                     },
//                     {
//                         "id": 687290922,
//                         "type": "preview",
//                         "hash": "3898f0094dc6949ab97f7d22f68b477c",
//                         "url": null,
//                         "filename": "eco-tote-bag-oyster-front-6605e99ebe3ff.jpg",
//                         "mime_type": "image/jpeg",
//                         "size": 54100,
//                         "width": 1000,
//                         "height": 1000,
//                         "dpi": null,
//                         "status": "ok",
//                         "created": 1711663520,
//                         "thumbnail_url": "https://files.cdn.printful.com/files/389/3898f0094dc6949ab97f7d22f68b477c_thumb.png",
//                         "preview_url": "https://files.cdn.printful.com/files/389/3898f0094dc6949ab97f7d22f68b477c_preview.png",
//                         "visible": false,
//                         "is_temporary": false,
//                         "message": "",
//                         "stitch_count_tier": null
//                     }
//                 ],
//                 "options": [
//                     {
//                         "id": "embroidery_type",
//                         "value": "flat"
//                     },
//                     {
//                         "id": "thread_colors",
//                         "value": []
//                     },
//                     {
//                         "id": "text_thread_colors",
//                         "value": []
//                     },
//                     {
//                         "id": "thread_colors_3d",
//                         "value": []
//                     },
//                     {
//                         "id": "thread_colors_apparel",
//                         "value": []
//                     },
//                     {
//                         "id": "text_thread_colors_apparel",
//                         "value": []
//                     },
//                     {
//                         "id": "lifelike",
//                         "value": false
//                     }
//                 ],
//                 "is_ignored": false,
//                 "size": "One size",
//                 "color": "Oyster",
//                 "availability_status": "active"
//             }
//         ],
//         "synced": 2,
//         "thumbnail_url": "https://files.cdn.printful.com/files/ae4/ae4749bba1bd10c166ad91e19ef7c7f7_preview.png",
//         "is_ignored": false
//     }
// ]

// const updatedProduct = [...product];

// data.data.forEach(item => {
//     item.catalog_variant_mockups.forEach(mockup => {
//         const matchingVariant = updatedProduct.find(variant => variant.variants.some(v => v.variant_id === mockup.catalog_variant_id));
//         if (matchingVariant) {
//             mockup.mockups.forEach(mockupItem => {
//                 const matchingFile = matchingVariant.files.find(file => file.type === 'preview' && file.filename === mockupItem.mockup_url.split('/').pop());
//                 if (matchingFile) {
//                     matchingFile.preview_url = mockupItem.mockup_url;
//                 }
//             });
//         }
//     });
// });
// console.log(product)
// }

// export default UpdatePreviewUrlsAndSetProduct;
