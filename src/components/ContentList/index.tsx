import React, { useState } from 'react';
import Image from "../../assets/image.png"
import './styles.css';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Bolo de cenoura',
    image: Image,
  },
  {
    id: 2,
    title: 'Bolo de chocolate',
    image: Image,
  },
  {
    id: 3,
    title: 'Bolo de morango',
    image: Image,
  },
]

const ContentList: React.FC = () => {
  const [recipeList, setRecipeList] = useState<Recipe[]>(recipes)

  const handleAddRecipe = () => {
    setRecipeList(oldRecipeList => 
      [...oldRecipeList, {
      id: oldRecipeList.length + 1,
      title: "Receita",
      image: Image
    }])
  }
  return (
      <main className="content-container">
          <h1>
          todas as receitas
          </h1>
          <div className="grid-container">
            {recipeList.map(recipe=>(
              <div className="grid-item">
                <div className="card-container">
                  <img src={recipe.image} alt={recipe.title} />
                  <span>
                    {recipe.title}
                  </span>
                  <button>
                      Conferir
                  </button>
                </div>
              </div>
            ))}
              
          </div>
          <button onClick={handleAddRecipe}>Inserir Receita</button>
      </main>
  );
}

export default ContentList;