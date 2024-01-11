import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import '../styles/CategoryFilter.css';

const CategoryFilter = observer(() => {
  const { article } = useContext(Context);
  
  const handleCategoryClick = (selectedCategory) => {
    article.setSelectedCategory(selectedCategory);
  };

  return (
    <ul className='categoryList'>
      {article.categories.map(category =>
        <li
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          className={category.id === article.selectedCategory.id ? 'active' : ''}
        >
          {category.name}
        </li>
      )}
    </ul>
  );
});

export default CategoryFilter;