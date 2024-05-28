
import React from 'react';

      
      /* @ts-ignore */
function UpdateBody(placements, catalog_variant_id, url, placement_options, catalog_product_id, mockup_style_ids) {
     /* @ts-ignore */
 

  const array = [mockup_style_ids]
  const body = {
      format: "jpg",
      products: [
          {
              source: "catalog",
              mockup_style_ids: array,
              catalog_product_id: catalog_product_id, // Set catalog_product_id
              catalog_variant_ids: catalog_variant_id, // Set catalog_variant_id
              orientation: "vertical",
              placements: [
                  {
                      placement: placements.placement, // Set placement
                      technique: placements.technique, // Set technique
                      layers: [
                          {
                              type: "file",
                              position: {
                                  width: 10, // Set width
                                  height: 10, // Set height
                                  top: 0, // Set top
                                  left: 0, // Set left
                              },
                              url: url, // Set url
                              layer_options: [],
                          },
                      ],
                      placement_options: placement_options, // Set placement_options
                      status: "",
                      status_explanation: "",
                  },
              ],
              product_options: [
                  {
                      name: "",
                      value: false,
                  },
              ],
          },
      ],
  };

  return body;
}





export default UpdateBody;