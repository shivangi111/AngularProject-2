import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;

  @Output() addedItems  = new EventEmitter();
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
      this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
        console.log('getCartItems',items);
        this.addedItems.emit([]);
      },err=>{
        this.addedItems.emit([]);
      })
    });
    
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    })
  }
}
