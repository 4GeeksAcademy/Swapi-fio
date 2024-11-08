const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [], //MIS FAV
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addFavorite: (uid) => {
				const currentFavorites = getStore().favorites;
				if (!currentFavorites.includes(uid)) { 
				  setStore({ favorites: [...currentFavorites, uid] });
				}
			},
		
			
			removeFavorite: (uid) => {
				setStore({
				  favorites: getStore().favorites.filter(fav => fav !== uid),
				});
			},
			
			
			changeColor: (index, color) => {
			
				const store = getStore();

				// Loop through the demo array to find the item at the specified index
				// and change its background color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				// Update the store with the new demo array
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
