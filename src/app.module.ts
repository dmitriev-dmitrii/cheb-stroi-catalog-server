import { Module } from '@nestjs/common';

import { ProductsModule } from './modules/products/products.module';
import { BrandsModule } from './modules/brands/brands.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [ProductsModule, BrandsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
