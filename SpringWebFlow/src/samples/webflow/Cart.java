package samples.webflow;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

/**
 * Cart 主要实现三个业务函数， 
 * getItems 用于获取当前购物车里的物品，
 * addItem 用于向购物车添加商品， 
 * getTotalPrice 用于获取购物车里所有商品的总价格。
 * @author KAI
 *
 */
public class Cart implements Serializable {
    
    private static Logger log = Logger.getLogger(Cart.class);
    
    private static final long serialVersionUID = 7901330827203016310L;
    
    private Map<Integer, CartItem> map = new HashMap<Integer, CartItem>();

    public List<CartItem> getItems() {
        log.info("===== Cart#getItems =====");
        return new ArrayList<CartItem>(map.values());
    }

    public void addItem(Product product) {
        
        log.info("===== Cart#addItem =====" + product.toString());
        
        int id = product.getId();
        CartItem item = map.get(id);
        if (item != null) {
            item.increaseQuantity();
        } else {
            map.put(id, new CartItem(product, 1));
        }
    }

    public int getTotalPrice() {
        
        int total = 0;
        for (CartItem item : map.values()) {
            total += item.getProduct().getPrice() * item.getQuantity();
        }
        
        log.info("===== Cart#getTotalPrice =====" + total);
        return total;
    }

}
