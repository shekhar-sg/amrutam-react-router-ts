export interface TopProductResponse {
  data: Datum[];
  status: string;
}

interface Datum {
  _id: string;
  id: number;
  description: string;
  title: string;
  location: string;
  ProductList: ProductList[];
  created_at: string;
  __v: number;
}

interface ProductList {
  _id: string;
  shopify_product_id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string;
  status: string;
  published_scope: string;
  tags: string;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: Image[];
  image: Image;
  ingredients: Ingredient[];
  highLights: [];
  __v: number;
  id: string;
}

interface Ingredient {
  _id: string;
  img: string;
  name: string;
  description: string;
  scientificName: string;
  active: boolean;
  slug: string;
  id: string;
}

interface Image {
  id: number;
  alt: null | string;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

interface Option {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
}

interface Variant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  position: number;
  inventory_policy: string;
  compare_at_price: (null | string)[];
  option1: string;
  option2: null;
  option3: null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  fulfillment_service: string;
  grams: number;
  inventory_management: string;
  requires_shipping: boolean;
  sku: string;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  admin_graphql_api_id: string;
  image_id: null | null | number | number;
  updatedInventory: number;
}
