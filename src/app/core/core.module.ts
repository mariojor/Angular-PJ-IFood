import { NgModule, ModuleWithProviders } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurant.service';
import { OrderService } from 'app/order/order.service';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService]
        };
    }
}
