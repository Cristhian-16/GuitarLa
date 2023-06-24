import { createContext, useState } from 'react';

export interface Products {
  id: string;
  name: string;
  descripcion: string;
  cantidad: number;
}
export interface TiendaPageProps {
  children: React.ReactNode;
}

export interface TiendaContextProps {
  productos: Products[];
  addProductToCart: (product: Products, cantidad: string) => void;
  deleteToCart: () => void;
}

export const TiendaContext = createContext<TiendaContextProps>({
  productos: [],
  addProductToCart: () => {
    return;
  },
  deleteToCart: () => {
    return;
  }
});

/* Reducer */

export const TiendaContextPage = ({ children }: TiendaPageProps) => {
  const [productos, setProductos] = useState<Products[]>([]);

  const addProductToCart = (product: Products, cantidad: string) => {
    const buscarProducto = productos.find(
      producto => producto.id === product.id
    );
    if (buscarProducto) {
      buscarProducto.cantidad += +cantidad;
      setProductos([...productos]);
      return;
    } else {
      setProductos([...productos, product]);
      return;
    }
  };

  const deleteToCart = () => {
    setProductos([]);
  };

  return (
    <TiendaContext.Provider
      value={{
        productos,
        addProductToCart,
        deleteToCart
      }}
    >
      {children}
    </TiendaContext.Provider>
  );
};
