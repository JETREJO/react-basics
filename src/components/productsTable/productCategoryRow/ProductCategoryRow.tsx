interface ProductCategoryProps {
  category: string;
}

const ProductCategoryRow: React.FC<ProductCategoryProps> = ({ category }) => {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;