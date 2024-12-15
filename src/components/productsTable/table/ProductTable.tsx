import { Product } from "../../../interfaces/Product";
import ProductCategoryRow from "../productCategoryRow/ProductCategoryRow";
import ProductRow from "../productRow/ProductRow";

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, filterText, inStockOnly }) => {
  const rows: any[] = [];
  let lastCategory: any = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) { return; }
    if (inStockOnly && !product.stocked) { return; }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
