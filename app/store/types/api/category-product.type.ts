export interface CategoryProductResponse {
  status: string;
  message: string;
  length: number;
  data: Datum[];
}

interface Datum {
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
  ingredients: string[];
  highLights: [];
  __v: number;
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
  variant_ids: number[][];
}

interface Option {
  product_id: number;
  id: number;
  name: string;
  position: number;
  values: string[];
}

interface Variant {
  product_id: number;
  id: number;
  title: string;
  price: string;
  position: number;
  inventory_policy: string;
  compare_at_price: null | string;
  option1: string;
  option2: null;
  option3: null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  fulfillment_service: string;
  grams: number;
  inventory_management: null | string;
  requires_shipping: boolean;
  sku: string;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  admin_graphql_api_id: string;
  image_id: null | number;
}
