import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { PizzaDocument } from './pizza.controller'
import { default as Description } from './index.json'

import '../ingredient/ingredient.model'

export const PizzaSchema = descriptionToSchema<PizzaDocument>(Description, options)
export const Pizza = mongoose.model<PizzaDocument>('Pizza', PizzaSchema)
