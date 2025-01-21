import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { collection } from './collection'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,collection],
}
