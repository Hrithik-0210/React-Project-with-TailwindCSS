export const MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "M.M.Street Food",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [{ id: "Order Online", title: "Order Online" }],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "750203",
              name: "M.M.Street Food",
              city: "Hosur",
              slugs: {
                restaurant: "m.m.street-food-hosur-city-hosur-city",
                city: "hosur",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
              locality: "Gandhi nagar",
              areaName: "Hosur City",
              costForTwo: "25000",
              costForTwoMessage: "₹250 for two",
              cuisines: ["South Indian", "Snacks"],
              feeDetails: { restaurantId: "750203", fees: [{}] },
              parentId: "444413",
              avgRatingString: "--",
              totalRatingsString: "Too Few Ratings",
              sla: {
                restaurantId: "750203",
                serviceability: "NON_SERVICEABLE",
                nonServiceableReason:
                  "NON_SERVICEABLE_REASON_NON_BATCHABLE_ACTIVE_ORDER",
                rainMode: "RAIN_MODE_NONE",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: { visibility: true, restaurantClosedMeta: {} },
              aggregatedDiscountInfo: { visible: true },
              badges: {},
              slugString: "m.m.street-food-hosur-city-hosur-city",
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "31 A,Gandhi nagar,3rd streetMookandapalli,Hosur Block,Krishnagiri,Tamilnadu,635126",
                },
                { title: "Cuisines", message: "South Indian,Snacks" },
              ],
              aggregatedDiscountInfoV2: { visible: true },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/750203",
              },
              availabilityServiceabilityMessage:
                "Does not deliver to your location",
              orderabilityCommunication: {
                title: { text: "Wish you were" },
                subTitle: { text: "CLOSER!" },
                message: {
                  text: "This location is outside the outlet's delivery area",
                  textColour: "negative",
                },
                customIcon: {
                  bgGradientColorStart: "#F64C41",
                  bgGradientColorEnd: "#E53554",
                },
              },
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              latLong: "12.7444375,77.8058281",
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              backgroundImageOverlayInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: { displayText: "Ratings 4.0+" },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: { attributes: { displayText: "VEG" } },
                      nonvegFilter: { attributes: { displayText: "NONVEG" } },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 22423099000334"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "M.M.Street Food",
                      area: "Hosur City",
                      completeAddress:
                        "31 A,Gandhi nagar,3rd streetMookandapalli,Hosur Block,Krishnagiri,Tamilnadu,635126",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "1c1b8a12-23ec-4927-b331-1051f9371157",
  sid: "e34367fe-0bc8-44f9-835f-8c2f65065c3e",
  deviceId: "6aeb15af-3c6d-7d99-dcac-7823c5a665c6",
  csrfToken: "1eAROVb2nL7G-Zs1n8EI3qgbDfQrljFCmMDz4zrY",
};

export const RESTAURANT_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "COVCELQ4KIDIrr7u/IXmTjCnEzgB",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "What's on your mind?",
              headerStyling: { padding: { left: 16, top: 16, bottom: 4 } },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 8, top: 8, right: 12, bottom: 4 },
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: { theme: "THEME_TYPE_DARK" },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "750203",
                  imageId:
                    "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId: "80476",
                  frequencyCapping: {},
                },
                {
                  id: "749879",
                  imageId:
                    "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                    text: "Chole Bhature",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chhole bhatoore",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                  frequencyCapping: {},
                },
                {
                  id: "750237",
                  imageId:
                    "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                    text: "Poori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for poori",
                    altTextCta: "open",
                  },
                  entityId: "80378",
                  frequencyCapping: {},
                },
                {
                  id: "750132",
                  imageId:
                    "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                    text: "Dosa",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for dosa",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                  frequencyCapping: {},
                },
                {
                  id: "750644",
                  imageId:
                    "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                    text: "Idli",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for idly",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                  frequencyCapping: {},
                },
                {
                  id: "750217",
                  imageId:
                    "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                    text: "Pav Bhaji",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pav bhaji",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                  frequencyCapping: {},
                },
                {
                  id: "749874",
                  imageId:
                    "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cakes",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                },
                {
                  id: "749763",
                  imageId:
                    "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                    text: "Lassi",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for lassi",
                    altTextCta: "open",
                  },
                  entityId: "80459",
                  frequencyCapping: {},
                },
                {
                  id: "750226",
                  imageId:
                    "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                },
                {
                  id: "750599",
                  imageId:
                    "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                    text: "Coffee",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for coffee",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                  frequencyCapping: {},
                },
                {
                  id: "750580",
                  imageId:
                    "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                    text: "pizzas",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pizza",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                  frequencyCapping: {},
                },
                {
                  id: "750592",
                  imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                  frequencyCapping: {},
                },
                {
                  id: "750223",
                  imageId:
                    "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    text: "Rolls",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for roll",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                  frequencyCapping: {},
                },
                {
                  id: "750605",
                  imageId:
                    "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                  action: {
                    link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                    text: "Tea",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for tea",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                  frequencyCapping: {},
                },
                {
                  id: "749791",
                  imageId:
                    "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                    text: "Pakoda",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pakoda",
                    altTextCta: "open",
                  },
                  entityId: "80470",
                  frequencyCapping: {},
                },
                {
                  id: "750239",
                  imageId:
                    "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                    text: "Shake",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for shakes",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                  frequencyCapping: {},
                },
                {
                  id: "750544",
                  imageId:
                    "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Upma.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80412?collection_id=80412&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                    text: "Upma",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for upma",
                    altTextCta: "open",
                  },
                  entityId: "80412",
                  frequencyCapping: {},
                },
                {
                  id: "750261",
                  imageId:
                    "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80391?collection_id=80391&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
                    text: "Rasmalai",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for rasmalai",
                    altTextCta: "open",
                  },
                  entityId: "80391",
                  frequencyCapping: {},
                },
                {
                  id: "750207",
                  imageId:
                    "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                    text: "Pasta",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pasta",
                    altTextCta: "open",
                  },
                  entityId: "80480",
                  frequencyCapping: {},
                },
                {
                  id: "749774",
                  imageId:
                    "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    text: "Noodles",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for noodles",
                    altTextCta: "open",
                  },
                  entityId: "80464",
                  frequencyCapping: {},
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "750203",
                    imageId:
                      "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId: "80476",
                    frequencyCapping: {},
                  },
                  {
                    id: "749879",
                    imageId:
                      "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                  },
                  {
                    id: "750237",
                    imageId:
                      "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80378",
                    frequencyCapping: {},
                  },
                  {
                    id: "750132",
                    imageId:
                      "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                      text: "Dosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for dosa",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                    frequencyCapping: {},
                  },
                  {
                    id: "750644",
                    imageId:
                      "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                      text: "Idli",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for idly",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                    frequencyCapping: {},
                  },
                  {
                    id: "750217",
                    imageId:
                      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                      text: "Pav Bhaji",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pav bhaji",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                    frequencyCapping: {},
                  },
                  {
                    id: "749874",
                    imageId:
                      "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cakes",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                  },
                  {
                    id: "749763",
                    imageId:
                      "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                      text: "Lassi",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for lassi",
                      altTextCta: "open",
                    },
                    entityId: "80459",
                    frequencyCapping: {},
                  },
                  {
                    id: "750226",
                    imageId:
                      "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                  },
                  {
                    id: "750599",
                    imageId:
                      "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                      text: "Coffee",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for coffee",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                    frequencyCapping: {},
                  },
                  {
                    id: "750580",
                    imageId:
                      "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                      text: "pizzas",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pizza",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                    frequencyCapping: {},
                  },
                  {
                    id: "750592",
                    imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                    frequencyCapping: {},
                  },
                  {
                    id: "750223",
                    imageId:
                      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                      text: "Rolls",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for roll",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                    frequencyCapping: {},
                  },
                  {
                    id: "750605",
                    imageId:
                      "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                    action: {
                      link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                      text: "Tea",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for tea",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                    frequencyCapping: {},
                  },
                  {
                    id: "749791",
                    imageId:
                      "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                      text: "Pakoda",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pakoda",
                      altTextCta: "open",
                    },
                    entityId: "80470",
                    frequencyCapping: {},
                  },
                  {
                    id: "750239",
                    imageId:
                      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                      text: "Shake",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for shakes",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                    frequencyCapping: {},
                  },
                  {
                    id: "750544",
                    imageId:
                      "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Upma.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80412?collection_id=80412&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                      text: "Upma",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for upma",
                      altTextCta: "open",
                    },
                    entityId: "80412",
                    frequencyCapping: {},
                  },
                  {
                    id: "750261",
                    imageId:
                      "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80391?collection_id=80391&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
                      text: "Rasmalai",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for rasmalai",
                      altTextCta: "open",
                    },
                    entityId: "80391",
                    frequencyCapping: {},
                  },
                  {
                    id: "750207",
                    imageId:
                      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                      text: "Pasta",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pasta",
                      altTextCta: "open",
                    },
                    entityId: "80480",
                    frequencyCapping: {},
                  },
                  {
                    id: "749774",
                    imageId:
                      "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                      text: "Noodles",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for noodles",
                      altTextCta: "open",
                    },
                    entityId: "80464",
                    frequencyCapping: {},
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Delhi",
              action: {},
              headerStyling: { padding: { left: 16, top: 28, bottom: 18 } },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 16, right: 12, bottom: 12 },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: { padding: { top: 6, bottom: 24 } },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "831065",
                      name: "Chinese Wok",
                      cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
                      locality: "Chandni Chowk",
                      areaName: "Omaxe mall",
                      costForTwo: "₹250 for two",
                      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
                      avgRating: 3.9,
                      parentId: "61955",
                      avgRatingString: "3.9",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 47,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 22:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹149",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chinese-wok-chandni-chowk-omaxe-mall-delhi-831065",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "38925",
                      name: "Domino's Pizza",
                      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
                      locality: "Netaji Subhash Marg",
                      areaName: "Daryaganj",
                      costForTwo: "₹400 for two",
                      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                      avgRating: 4.3,
                      parentId: "2456",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 7.5,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "7.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-29 01:55:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Pizza.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "807783",
                      name: "Burger King",
                      cloudinaryImageId: "533d5ee221cb729dcf42faeb8761f57d",
                      locality: "Omaxe Mall",
                      areaName: "Chandni Chowk",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 3.8,
                      parentId: "166",
                      avgRatingString: "3.8",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 61,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "60-65 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Burger.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Burger.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹139",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-king-omaxe-mall-chandni-chowk-delhi-807783",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "343711",
                      name: "Chaayos Chai+Snacks=Relax",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_343711.JPG",
                      locality: "Karol Bagh",
                      areaName: "East Patel Nagar",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets",
                      ],
                      avgRating: 4.4,
                      parentId: "281782",
                      avgRatingString: "4.4",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 52,
                        lastMileTravel: 7.9,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "7.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-29 02:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            description: "Delivery!",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹499",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-karol-bagh-east-patel-nagar-delhi-343711",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "253765",
                      name: "McDonald's",
                      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
                      locality: "Chandni Chowk",
                      areaName: "Chandni Chowk",
                      costForTwo: "₹400 for two",
                      cuisines: ["American"],
                      avgRating: 4.3,
                      parentId: "630",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:58:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Burger.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Burger.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/mcdonalds-chandni-chowk-delhi-253765",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "780927",
                      name: "Subway",
                      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
                      locality: "RK Ashram metro station",
                      areaName: "Food Forum food court",
                      costForTwo: "₹350 for two",
                      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                      avgRating: 3.8,
                      parentId: "2",
                      avgRatingString: "3.8",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 56,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "55-60 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-29 02:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹60",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/subway-rk-ashram-metro-station-food-forum-food-court-delhi-780927",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "805983",
                      name: "FreshMenu",
                      cloudinaryImageId: "f5980f4e4888af4e5c275d5dd3ea93f6",
                      locality: "SHAKARPUR",
                      areaName: "NEHRU ENCLAVE",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Continental",
                        "Chinese",
                        "Oriental",
                        "Asian",
                        "Healthy Food",
                        "Fast Food",
                        "Indian",
                        "Desserts",
                      ],
                      avgRating: 4.1,
                      parentId: "398",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 58,
                        lastMileTravel: 7.3,
                        serviceability: "SERVICEABLE",
                        slaString: "55-60 mins",
                        lastMileTravelString: "7.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "EVERY ITEM",
                        subHeader: "@ ₹129",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/freshmenu-shakarpur-nehru-enclave-delhi-805983",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "831441",
                      name: "Pastas By Pizza Hut",
                      cloudinaryImageId: "80ca62f0de020f8cbe39fd034d3325d5",
                      locality: "Old Tanga Stand",
                      areaName: "Devika Sadar Bazar",
                      costForTwo: "₹400 for two",
                      cuisines: ["Pastas"],
                      avgRating: 3.7,
                      parentId: "306806",
                      avgRatingString: "3.7",
                      totalRatingsString: "5",
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-old-tanga-stand-devika-sadar-bazar-delhi-831441",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "707690",
                      name: "Hongs Kitchen Hearty! Tasty ! Chinese!",
                      cloudinaryImageId: "9895f0d15c1a522ab5407effa9193f98",
                      locality: "Vikas Marg",
                      areaName: "Laxmi Nagar",
                      costForTwo: "₹250 for two",
                      cuisines: ["Chinese", "Asian", "Tibetan"],
                      avgRating: 4.1,
                      parentId: "9547",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 52,
                        lastMileTravel: 6.9,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "6.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Chinese.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/hongs-kitchen-hearty-tasty-chinese-vikas-marg-laxmi-nagar-delhi-707690",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "326429",
                      name: "Punjabi Angithi (Vegorama Group)",
                      cloudinaryImageId: "lgfkquq3npd3r9oiy62b",
                      locality: "Satyawati Colony",
                      areaName: "Ashok vihar",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "North Indian",
                        "Chinese",
                        "Punjabi",
                        "Snacks",
                      ],
                      avgRating: 4.2,
                      veg: true,
                      parentId: "465050",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 56,
                        lastMileTravel: 8.1,
                        serviceability: "SERVICEABLE",
                        slaString: "55-60 mins",
                        lastMileTravelString: "8.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-North%20Indian.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-satyawati-colony-ashok-vihar-delhi-326429",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "279866",
                      name: "Ghar ka Khana by EatFit",
                      cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
                      locality: "Laxmi Narain Street",
                      areaName: "Paharganj",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "North Indian",
                        "Home Food",
                        "Healthy Food",
                        "Indian",
                        "Punjabi",
                        "South Indian",
                        "Rajasthani",
                        "Maharashtrian",
                        "Snacks",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      parentId: "422576",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 41,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:45:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-laxmi-narain-street-paharganj-delhi-279866",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "258198",
                      name: "Great Indian Khichdi by EatFit",
                      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
                      locality: "Chuna Mandi",
                      areaName: "Paharganj",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Healthy Food",
                        "Snacks",
                        "Desserts",
                        "Rajasthani",
                        "South Indian",
                        "Maharashtrian",
                        "Sweets",
                      ],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "319582",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:45:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹149",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-chuna-mandi-paharganj-delhi-258198",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "611135",
                      name: "Keventers Ice Cream",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/c225a4e8-4b98-4c14-939b-361c7bcae118_611135.JPG",
                      locality: "Preet Vihar",
                      areaName: "Laxmi Nagar",
                      costForTwo: "₹200 for two",
                      cuisines: ["Ice Cream", "Desserts"],
                      avgRating: 4.2,
                      veg: true,
                      parentId: "272044",
                      avgRatingString: "4.2",
                      totalRatingsString: "20+",
                      sla: {
                        deliveryTime: 53,
                        lastMileTravel: 7.1,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "7.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/keventers-ice-cream-preet-vihar-laxmi-nagar-delhi-611135",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "367667",
                      name: "The Brooklyn Creamery - Healthy Ice Cream",
                      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
                      locality: "Karol Bagh Main Road",
                      areaName: "KAROL BAGH",
                      costForTwo: "₹200 for two",
                      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
                      avgRating: 4.2,
                      veg: true,
                      parentId: "236673",
                      avgRatingString: "4.2",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 51,
                        lastMileTravel: 6.2,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "6.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-29 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹69",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-main-road-karol-bagh-delhi-367667",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "129858",
                      name: "Nirula's",
                      cloudinaryImageId: "f3cced21e2be658118713e4008f3b7f3",
                      locality: "Shankar Road",
                      areaName: "Rajinder Nagar",
                      costForTwo: "₹500 for two",
                      cuisines: ["Ice Cream", "Desserts", "Beverages"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "1738",
                      avgRatingString: "4.6",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 41,
                        lastMileTravel: 7.3,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "7.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-29 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/nirulas-shankar-road-rajinder-nagar-delhi-129858",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "661081",
                      name: "HRX Beverages - Juices, Coffee & Kombucha",
                      cloudinaryImageId: "3aed4be19affeb4bba136c953ba7283c",
                      locality: "Laxmi Narain Street",
                      areaName: "karol Bagh",
                      costForTwo: "₹270 for two",
                      cuisines: [
                        "Beverages",
                        "Juices",
                        "Healthy Food",
                        "Desserts",
                      ],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "509799",
                      avgRatingString: "4.5",
                      totalRatingsString: "10+",
                      sla: {
                        deliveryTime: 45,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:45:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/hrx-beverages-juices-coffee-and-kombucha-laxmi-narain-street-karol-bagh-delhi-661081",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "425868",
                      name: "Havmor Havfunn Ice Cream",
                      cloudinaryImageId: "49845b494b1e637209b7bd1c7ca184ad",
                      locality: "Karol Bagh",
                      areaName: "East Patel Nagar",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Ice Cream",
                        "Ice Cream Cakes",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "94570",
                      avgRatingString: "4.5",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 53,
                        lastMileTravel: 7.9,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "7.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-karol-bagh-east-patel-nagar-delhi-425868",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "649008",
                      name: "FNP Cakes By Ferns N Petals",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/17/18623c5f-8ecf-406f-859d-3e2b2392149b_649008.jpg",
                      locality: "Krishna Nagar",
                      areaName: "Laxmi Nagar",
                      costForTwo: "₹499 for two",
                      cuisines: [
                        "Desserts",
                        "Bakery",
                        "Sweets",
                        "Ice Cream",
                        "Beverages",
                        "North Indian",
                        "Chinese",
                      ],
                      avgRating: 4.2,
                      veg: true,
                      parentId: "339638",
                      avgRatingString: "4.2",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 53,
                        lastMileTravel: 7.2,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "7.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 14:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-krishna-nagar-laxmi-nagar-delhi-649008",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "21312",
                      name: "Barista Coffee",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/d617e336-d2d8-432e-b0b5-8c24a99b1d29_21312.jpg",
                      locality: "East Patel Nagar",
                      areaName: "East Patel Nagar",
                      costForTwo: "₹350 for two",
                      cuisines: ["Beverages", "Snacks", "Desserts"],
                      avgRating: 4.4,
                      parentId: "416281",
                      avgRatingString: "4.4",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 48,
                        lastMileTravel: 7.9,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "7.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-28 22:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/barista-coffee-east-patel-nagar-delhi-21312",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "673902",
                      name: "Goila Butter Chicken",
                      cloudinaryImageId: "5e19832da032dd69547565e27104706f",
                      locality: "IP Extension",
                      areaName: "IP Extension",
                      costForTwo: "₹600 for two",
                      cuisines: [
                        "North Indian",
                        "Biryani",
                        "Kebabs",
                        "Desserts",
                      ],
                      avgRating: 4.1,
                      parentId: "322587",
                      avgRatingString: "4.1",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 61,
                        lastMileTravel: 8.8,
                        serviceability: "SERVICEABLE",
                        slaString: "60-65 mins",
                        lastMileTravelString: "8.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-05-29 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          { imageId: "newg.png", description: "Gourmet" },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/goila-butter-chicken-ip-extension-delhi-673902",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Delhi",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Udaipur",
                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Cuisines Near Me",
            brands: [
              {
                text: "Chinese Restaurant Near Me",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Kerala Restaurant Near Me",
                link: "https://www.swiggy.com/kerala-restaurants-near-me",
              },
              {
                text: "Korean Restaurant Near Me",
                link: "https://www.swiggy.com/korean-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Jain Restaurant Near Me",
                link: "https://www.swiggy.com/jain-restaurants-near-me",
              },
              {
                text: "Gujarati Restaurant Near Me",
                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Turkish Restaurant Near Me",
                link: "https://www.swiggy.com/turkish-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              { text: "Gurgaon", link: "https://www.swiggy.com/city/gurgaon" },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              { text: "Delhi", link: "https://www.swiggy.com/city/delhi" },
              { text: "Mumbai", link: "https://www.swiggy.com/city/mumbai" },
              { text: "Pune", link: "https://www.swiggy.com/city/pune" },
              { text: "Kolkata", link: "https://www.swiggy.com/city/kolkata" },
              { text: "Chennai", link: "https://www.swiggy.com/city/chennai" },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              { text: "Jaipur", link: "https://www.swiggy.com/city/jaipur" },
              { text: "Kochi", link: "https://www.swiggy.com/city/kochi" },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              { text: "Lucknow", link: "https://www.swiggy.com/city/lucknow" },
              { text: "Nagpur", link: "https://www.swiggy.com/city/nagpur" },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              { text: "Indore", link: "https://www.swiggy.com/city/indore" },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              { text: "Vizag", link: "https://www.swiggy.com/city/vizag" },
              { text: "Surat", link: "https://www.swiggy.com/city/surat" },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              { text: "Noida", link: "https://www.swiggy.com/city/noida" },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              { text: "Trichy", link: "https://www.swiggy.com/city/trichy" },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              { text: "Kanpur", link: "https://www.swiggy.com/city/kanpur" },
              { text: "Mysore", link: "https://www.swiggy.com/city/mysore" },
              { text: "Nashik", link: "https://www.swiggy.com/city/nashik" },
              { text: "Udaipur", link: "https://www.swiggy.com/city/udaipur" },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              { text: "Agra", link: "https://www.swiggy.com/city/agra" },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              { text: "Kota", link: "https://www.swiggy.com/city/kota" },
              { text: "Madurai", link: "https://www.swiggy.com/city/madurai" },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              { text: "Manipal", link: "https://www.swiggy.com/city/manipal" },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              { text: "Meerut", link: "https://www.swiggy.com/city/meerut" },
              { text: "Bhopal", link: "https://www.swiggy.com/city/bhopal" },
              { text: "Ooty", link: "https://www.swiggy.com/city/ooty" },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              { text: "Raipur", link: "https://www.swiggy.com/city/raipur" },
              { text: "Bikaner", link: "https://www.swiggy.com/city/bikaner" },
              { text: "Rajkot", link: "https://www.swiggy.com/city/rajkot" },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              { text: "Sirsa", link: "https://www.swiggy.com/city/sirsa" },
              { text: "Gwalior", link: "https://www.swiggy.com/city/gwalior" },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              { text: "Tirupur", link: "https://www.swiggy.com/city/tirupur" },
              { text: "Vellore", link: "https://www.swiggy.com/city/vellore" },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              { text: "Patna", link: "https://www.swiggy.com/city/patna" },
              { text: "Ranchi", link: "https://www.swiggy.com/city/ranchi" },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              { text: "Guntur", link: "https://www.swiggy.com/city/guntur" },
              { text: "Ujjain", link: "https://www.swiggy.com/city/ujjain" },
              { text: "Patiala", link: "https://www.swiggy.com/city/patiala" },
              { text: "Karnal", link: "https://www.swiggy.com/city/karnal" },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              { text: "Bhilai", link: "https://www.swiggy.com/city/bhilai" },
              { text: "Anand", link: "https://www.swiggy.com/city/anand" },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              { text: "Jammu", link: "https://www.swiggy.com/city/jammu" },
              { text: "Muktsar", link: "https://www.swiggy.com/city/muktsar" },
              { text: "Panipat", link: "https://www.swiggy.com/city/panipat" },
              { text: "Dhanbad", link: "https://www.swiggy.com/city/dhanbad" },
              { text: "Hubli", link: "https://www.swiggy.com/city/hubli" },
              { text: "Belgaum", link: "https://www.swiggy.com/city/belgaum" },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              { text: "Solapur", link: "https://www.swiggy.com/city/solapur" },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              { text: "Cuttack", link: "https://www.swiggy.com/city/cuttack" },
              { text: "Aligarh", link: "https://www.swiggy.com/city/aligarh" },
              { text: "Salem", link: "https://www.swiggy.com/city/salem" },
              { text: "Jodhpur", link: "https://www.swiggy.com/city/jodhpur" },
              { text: "Ajmer", link: "https://www.swiggy.com/city/ajmer" },
              { text: "Jhansi", link: "https://www.swiggy.com/city/jhansi" },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              { text: "Erode", link: "https://www.swiggy.com/city/erode" },
              { text: "Nellore", link: "https://www.swiggy.com/city/nellore" },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              { text: "Kurnool", link: "https://www.swiggy.com/city/kurnool" },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              { text: "Ambala", link: "https://www.swiggy.com/city/ambala" },
              { text: "Ballari", link: "https://www.swiggy.com/city/ballari" },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              { text: "Mathura", link: "https://www.swiggy.com/city/mathura" },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              { text: "Sangli", link: "https://www.swiggy.com/city/sangli" },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              { text: "Kadapa", link: "https://www.swiggy.com/city/kadapa" },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              { text: "Roorkee", link: "https://www.swiggy.com/city/roorkee" },
              { text: "Nanded", link: "https://www.swiggy.com/city/nanded" },
              { text: "Rewa", link: "https://www.swiggy.com/city/rewa" },
              { text: "Satna", link: "https://www.swiggy.com/city/satna" },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              { text: "Valsad", link: "https://www.swiggy.com/city/valsad" },
              { text: "Vapi", link: "https://www.swiggy.com/city/vapi" },
              { text: "Chhapra", link: "https://www.swiggy.com/city/chhapra" },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              { text: "Kollam", link: "https://www.swiggy.com/city/kollam" },
              { text: "Silchar", link: "https://www.swiggy.com/city/silchar" },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              { text: "Sonipat", link: "https://www.swiggy.com/city/sonipat" },
              { text: "Rohtak", link: "https://www.swiggy.com/city/rohtak" },
              { text: "Mehsana", link: "https://www.swiggy.com/city/mehsana" },
              { text: "Kullu", link: "https://www.swiggy.com/city/kullu" },
              { text: "Dhule", link: "https://www.swiggy.com/city/dhule" },
              { text: "Dharwad", link: "https://www.swiggy.com/city/dharwad" },
              { text: "Latur", link: "https://www.swiggy.com/city/latur" },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              { text: "Khammam", link: "https://www.swiggy.com/city/khammam" },
              { text: "Hampi", link: "https://www.swiggy.com/city/hampi" },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              { text: "Akola", link: "https://www.swiggy.com/city/akola" },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              { text: "Gaya", link: "https://www.swiggy.com/city/gaya" },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              { text: "Dewas", link: "https://www.swiggy.com/city/dewas" },
              { text: "Korba", link: "https://www.swiggy.com/city/korba" },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              { text: "Jalgaon", link: "https://www.swiggy.com/city/jalgaon" },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              { text: "Hapur", link: "https://www.swiggy.com/city/hapur" },
              { text: "Morena", link: "https://www.swiggy.com/city/morena" },
              { text: "Hassan", link: "https://www.swiggy.com/city/hassan" },
              { text: "Hisar", link: "https://www.swiggy.com/city/hisar" },
              { text: "Godhra", link: "https://www.swiggy.com/city/godhra" },
              { text: "Kolar ", link: "https://www.swiggy.com/city/kolar" },
              { text: "Rampur", link: "https://www.swiggy.com/city/rampur" },
              { text: "Sitapur", link: "https://www.swiggy.com/city/sitapur" },
              { text: "Etawah", link: "https://www.swiggy.com/city/etawah" },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              { text: "Nadiad", link: "https://www.swiggy.com/city/nadiad" },
              { text: "Sagar", link: "https://www.swiggy.com/city/sagar" },
              { text: "Morbi", link: "https://www.swiggy.com/city/morbi" },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              { text: "Katni", link: "https://www.swiggy.com/city/katni" },
              { text: "Khandwa", link: "https://www.swiggy.com/city/khandwa" },
              { text: "Eluru", link: "https://www.swiggy.com/city/eluru" },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              { text: "Deoghar", link: "https://www.swiggy.com/city/deoghar" },
              { text: "Khanna", link: "https://www.swiggy.com/city/khanna" },
              { text: "Bidar", link: "https://www.swiggy.com/city/bidar" },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              { text: "Beed", link: "https://www.swiggy.com/city/beed" },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              { text: "Asansol", link: "https://www.swiggy.com/city/asansol" },
              { text: "Beawar", link: "https://www.swiggy.com/city/beawar" },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              { text: "Gondia", link: "https://www.swiggy.com/city/gondia" },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              { text: "Jalna", link: "https://www.swiggy.com/city/jalna" },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              { text: "Moga", link: "https://www.swiggy.com/city/moga" },
              { text: "Abohar", link: "https://www.swiggy.com/city/abohar" },
              { text: "Adoni", link: "https://www.swiggy.com/city/adoni" },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              { text: "Satara", link: "https://www.swiggy.com/city/satara" },
              { text: "Ambur", link: "https://www.swiggy.com/city/ambur" },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              { text: "Ratlam", link: "https://www.swiggy.com/city/ratlam" },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              { text: "Ongole", link: "https://www.swiggy.com/city/ongole" },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              { text: "Unnao", link: "https://www.swiggy.com/city/unnao" },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              { text: "Pali", link: "https://www.swiggy.com/city/pali" },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              { text: "Bhiwani", link: "https://www.swiggy.com/city/bhiwani" },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              { text: "Kaithal", link: "https://www.swiggy.com/city/kaithal" },
              { text: "Jagtial", link: "https://www.swiggy.com/city/jagtial" },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              { text: "Guna", link: "https://www.swiggy.com/city/guna" },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              { text: "Orai", link: "https://www.swiggy.com/city/orai" },
              { text: "Bhadrak", link: "https://www.swiggy.com/city/bhadrak" },
              { text: "Batala", link: "https://www.swiggy.com/city/batala" },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              { text: "Barnala", link: "https://www.swiggy.com/city/barnala" },
              { text: "Raigarh", link: "https://www.swiggy.com/city/raigarh" },
              { text: "Nagaon", link: "https://www.swiggy.com/city/nagaon" },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              { text: "Giridih", link: "https://www.swiggy.com/city/giridih" },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              { text: "Vidisha", link: "https://www.swiggy.com/city/vidisha" },
              { text: "Dimapur", link: "https://www.swiggy.com/city/dimapur" },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              { text: "Imphal", link: "https://www.swiggy.com/city/imphal" },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              { text: "Hardoi", link: "https://www.swiggy.com/city/hardoi" },
              { text: "Basti", link: "https://www.swiggy.com/city/basti" },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              { text: "Hospet", link: "https://www.swiggy.com/city/hospet" },
              { text: "Budaun", link: "https://www.swiggy.com/city/budaun" },
              { text: "Neemuch", link: "https://www.swiggy.com/city/neemuch" },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              { text: "Barshi", link: "https://www.swiggy.com/city/barshi" },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              { text: "Wardha", link: "https://www.swiggy.com/city/wardha" },
              { text: "Sehore", link: "https://www.swiggy.com/city/sehore" },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              { text: "Puri", link: "https://www.swiggy.com/city/puri" },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              { text: "Bhuj", link: "https://www.swiggy.com/city/bhuj" },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              { text: "Bharuch", link: "https://www.swiggy.com/city/bharuch" },
              { text: "Navsari", link: "https://www.swiggy.com/city/navsari" },
              { text: "Amreli", link: "https://www.swiggy.com/city/amreli" },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              { text: "Sikar", link: "https://www.swiggy.com/city/sikar" },
              { text: "Churu", link: "https://www.swiggy.com/city/churu" },
              { text: "Alwar", link: "https://www.swiggy.com/city/alwar" },
              { text: "Bhiwadi", link: "https://www.swiggy.com/city/bhiwadi" },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              { text: "Bundi", link: "https://www.swiggy.com/city/bundi" },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              { text: "Purulia", link: "https://www.swiggy.com/city/purulia" },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              { text: "Dholpur", link: "https://www.swiggy.com/city/dholpur" },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              { text: "Bongaon", link: "https://www.swiggy.com/city/bongaon" },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              { text: "Habra", link: "https://www.swiggy.com/city/habra" },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              { text: "Bijapur", link: "https://www.swiggy.com/city/bijapur" },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              { text: "Raichur", link: "https://www.swiggy.com/city/raichur" },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              { text: "Jind", link: "https://www.swiggy.com/city/jind" },
              { text: "Rewari", link: "https://www.swiggy.com/city/rewari" },
              { text: "Palwal", link: "https://www.swiggy.com/city/palwal" },
              { text: "Hathras", link: "https://www.swiggy.com/city/hathras" },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              { text: "Banda", link: "https://www.swiggy.com/city/banda" },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              { text: "Gonda", link: "https://www.swiggy.com/city/gonda" },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              { text: "Nagda", link: "https://www.swiggy.com/city/nagda" },
              { text: "Raiganj", link: "https://www.swiggy.com/city/raiganj" },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              { text: "Shamli", link: "https://www.swiggy.com/city/shamli" },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              { text: "Ballia", link: "https://www.swiggy.com/city/ballia" },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              { text: "Etah", link: "https://www.swiggy.com/city/etah" },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              { text: "Haldia", link: "https://www.swiggy.com/city/haldia" },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              { text: "Udgir", link: "https://www.swiggy.com/city/udgir" },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              { text: "Bhind", link: "https://www.swiggy.com/city/bhind" },
              { text: "Mandya", link: "https://www.swiggy.com/city/mandya" },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              { text: "Jaunpur", link: "https://www.swiggy.com/city/jaunpur" },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              { text: "Jorhat", link: "https://www.swiggy.com/city/jorhat" },
              { text: "Nandyal", link: "https://www.swiggy.com/city/nandyal" },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              { text: "Buxar", link: "https://www.swiggy.com/city/buxar" },
              { text: "Siwan", link: "https://www.swiggy.com/city/siwan" },
              { text: "Dehri", link: "https://www.swiggy.com/city/dehri" },
              { text: "Bettiah", link: "https://www.swiggy.com/city/bettiah" },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              { text: "Saharsa", link: "https://www.swiggy.com/city/saharsa" },
              { text: "Hajipur", link: "https://www.swiggy.com/city/hajipur" },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              { text: "Sasaram", link: "https://www.swiggy.com/city/sasaram" },
              { text: "Munger", link: "https://www.swiggy.com/city/munger" },
              { text: "Katihar", link: "https://www.swiggy.com/city/katihar" },
              { text: "Arrah", link: "https://www.swiggy.com/city/arrah" },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              { text: "Neyveli", link: "https://www.swiggy.com/city/neyveli" },
              { text: "Waidhan", link: "https://www.swiggy.com/city/waidhan" },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              { text: "Bhatkal", link: "https://www.swiggy.com/city/bhatkal" },
              { text: "Gokak", link: "https://www.swiggy.com/city/gokak" },
              { text: "Itarsi", link: "https://www.swiggy.com/city/itarsi" },
              { text: "Dhar", link: "https://www.swiggy.com/city/dhar" },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              { text: "Gadwal", link: "https://www.swiggy.com/city/gadwal" },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              { text: "Sangrur", link: "https://www.swiggy.com/city/sangrur" },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              { text: "Ramgarh", link: "https://www.swiggy.com/city/ramgarh" },
              { text: "Bantwal", link: "https://www.swiggy.com/city/bantwal" },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              { text: "Buldana", link: "https://www.swiggy.com/city/buldana" },
              { text: "Karad", link: "https://www.swiggy.com/city/karad" },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              { text: "Tiptur", link: "https://www.swiggy.com/city/tiptur" },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              { text: "Malout", link: "https://www.swiggy.com/city/malout" },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              { text: "Ropar", link: "https://www.swiggy.com/city/ropar" },
              { text: "Nangal", link: "https://www.swiggy.com/city/nangal" },
              { text: "Narnaul", link: "https://www.swiggy.com/city/narnaul" },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              { text: "Dausa", link: "https://www.swiggy.com/city/dausa" },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              { text: "Purnea", link: "https://www.swiggy.com/city/purnea" },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              { text: "Malda", link: "https://www.swiggy.com/city/malda" },
              { text: "Tuni", link: "https://www.swiggy.com/city/tuni" },
              { text: "Puttur", link: "https://www.swiggy.com/city/puttur" },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              { text: "Nirmal", link: "https://www.swiggy.com/city/nirmal" },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              { text: "Tanuku", link: "https://www.swiggy.com/city/tanuku" },
              { text: "Dahod", link: "https://www.swiggy.com/city/dahod" },
              { text: "Barmer", link: "https://www.swiggy.com/city/barmer" },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              { text: "Nakodar", link: "https://www.swiggy.com/city/nakodar" },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              { text: "Vyara", link: "https://www.swiggy.com/city/vyara" },
              { text: "Bardoli", link: "https://www.swiggy.com/city/bardoli" },
              { text: "Halol", link: "https://www.swiggy.com/city/halol" },
              { text: "Bijnor", link: "https://www.swiggy.com/city/bijnor" },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              { text: "Betul", link: "https://www.swiggy.com/city/betul" },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              { text: "Sirsi", link: "https://www.swiggy.com/city/sirsi" },
              { text: "Theni", link: "https://www.swiggy.com/city/theni" },
              { text: "Karur", link: "https://www.swiggy.com/city/karur" },
              { text: "Karwar", link: "https://www.swiggy.com/city/karwar" },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              { text: "Kannur", link: "https://www.swiggy.com/city/kannur" },
              { text: "Noida 1", link: "https://www.swiggy.com/city/noida-1" },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              { text: "Kadiri", link: "https://www.swiggy.com/city/kadiri" },
              { text: "Kavali", link: "https://www.swiggy.com/city/kavali" },
              { text: "Tezpur", link: "https://www.swiggy.com/city/tezpur" },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              { text: "Jagraon", link: "https://www.swiggy.com/city/jagraon" },
              { text: "Mansa", link: "https://www.swiggy.com/city/mansa" },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              { text: "Fazilka", link: "https://www.swiggy.com/city/fazilka" },
              { text: "Baddi", link: "https://www.swiggy.com/city/baddi" },
              { text: "Solan", link: "https://www.swiggy.com/city/solan" },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              { text: "Hansi", link: "https://www.swiggy.com/city/hansi" },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              { text: "Tohana", link: "https://www.swiggy.com/city/tohana" },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              { text: "Veraval", link: "https://www.swiggy.com/city/veraval" },
              { text: "Daman", link: "https://www.swiggy.com/city/daman" },
              { text: "Chiplun", link: "https://www.swiggy.com/city/chiplun" },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              { text: "Lonavla", link: "https://www.swiggy.com/city/lonavla" },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              { text: "Bolpur", link: "https://www.swiggy.com/city/bolpur" },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              { text: "Kotdwar", link: "https://www.swiggy.com/city/kotdwar" },
              { text: "Koppal", link: "https://www.swiggy.com/city/koppal" },
              { text: "Chikhli", link: "https://www.swiggy.com/city/chikhli" },
              { text: "Dahanu", link: "https://www.swiggy.com/city/dahanu" },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              { text: "Rangpo", link: "https://www.swiggy.com/city/rangpo" },
              { text: "Aizawl", link: "https://www.swiggy.com/city/aizawl" },
              { text: "Gangtok", link: "https://www.swiggy.com/city/gangtok" },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              { text: "Kannauj", link: "https://www.swiggy.com/city/kannauj" },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              { text: "Palani", link: "https://www.swiggy.com/city/palani" },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              { text: "Boisar", link: "https://www.swiggy.com/city/boisar" },
              { text: "Kohima", link: "https://www.swiggy.com/city/kohima" },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              { text: "Dumka", link: "https://www.swiggy.com/city/dumka" },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              { text: "Baran", link: "https://www.swiggy.com/city/baran" },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              { text: "Pusad", link: "https://www.swiggy.com/city/pusad" },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              { text: "Manali", link: "https://www.swiggy.com/city/manali" },
              { text: "Diu", link: "https://www.swiggy.com/city/diu" },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              { text: "Almora", link: "https://www.swiggy.com/city/almora" },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              { text: "Bhadohi", link: "https://www.swiggy.com/city/bhadohi" },
              { text: "Tenkasi", link: "https://www.swiggy.com/city/tenkasi" },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              { text: "Rajgarh", link: "https://www.swiggy.com/city/rajgarh" },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              { text: "Washim", link: "https://www.swiggy.com/city/washim" },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              { text: "Suri", link: "https://www.swiggy.com/city/suri" },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              { text: "Wayanad", link: "https://www.swiggy.com/city/wayanad" },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              { text: "Mahoba", link: "https://www.swiggy.com/city/mahoba" },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              { text: "Sirkali", link: "https://www.swiggy.com/city/sirkali" },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              { text: "Digboi", link: "https://www.swiggy.com/city/digboi" },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              { text: "Nalbari", link: "https://www.swiggy.com/city/nalbari" },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              { text: "Hosur", link: "https://www.swiggy.com/city/hosur" },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              { text: "Barh", link: "https://www.swiggy.com/city/barh" },
              { text: "Palghar", link: "https://www.swiggy.com/city/palghar" },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              { text: "Haveri", link: "https://www.swiggy.com/city/haveri" },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              { text: "Jjajjar", link: "https://www.swiggy.com/city/jjajjar" },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              { text: "Rangia", link: "https://www.swiggy.com/city/rangia" },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              { text: "Una", link: "https://www.swiggy.com/city/una" },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              { text: "Jamui", link: "https://www.swiggy.com/city/jamui" },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              { text: "Araria", link: "https://www.swiggy.com/city/araria" },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              { text: "Hojai", link: "https://www.swiggy.com/city/hojai" },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              { text: "Dasuya", link: "https://www.swiggy.com/city/dasuya" },
              { text: "Gudur", link: "https://www.swiggy.com/city/gudur" },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              { text: "Piler", link: "https://www.swiggy.com/city/piler" },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              { text: "Nabha", link: "https://www.swiggy.com/city/nabha" },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              { text: "Roha", link: "https://www.swiggy.com/city/roha" },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "delhi",
            lat: "28.65420",
            lng: "77.23730",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-1d3ef775-f8b0-4180-a2ab-6f58d008727b","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle:
                "Order Food Online from India's Best Food Delivery Service | Swiggy",
              pageMetaDescription:
                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
              pageKeywords:
                "Food delivery, Online food order, Online food dleivery",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "2caf9843-3536-46b4-85c4-20073b571209",
  sid: "e2zcd697-6864-40d3-8617-47cac1f39d58",
  deviceId: "6aeb15af-3c6d-7d99-dcac-7823c5a665c6",
  csrfToken: "YkVDnPPUtl10-zuQV3csT7F76LviH7__KJWfxYIg",
};
