const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: sessionStorage.getItem("token") || null,
			user: {},	  
			message: null,
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
			// Use getActions to call a function within a fuction

			leerPostulante: async () => {
				let store = getStore()
				const opts = {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  }
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/postulante`,
					opts
				  );
		
				  if (response.ok) {
					console.log(response);
					const data = await response.json();
					setStore({
					  user: data
					});
				  }
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			signupPostulante: async (data) => {
				console.log(data);
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(data),
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/postulante`,
					opts
				  );
		
				  if (!response.ok) {
					console.log(response);
					return false;
				  }
				  const data = await response.json();
				  console.log(data);
				  return true;
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			editarPostulante: async (data) => {
				let store = getStore()
				const opts = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  },
				  body: JSON.stringify(data)
				};
				
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/postulante`,
					opts
				  );
		
				  if (!response.ok) {
					console.log(response);
					return false;
				  }
				  const data = await response.json();
				  console.log(data);
				  return true;
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			  subirCV: async (data) => {
				let store = getStore()
				const opts = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  },
				  body: JSON.stringify(data)
				};
				
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/cv`,
					opts
				  );
		
				  if (!response.ok) {
					console.log(response);
					return false;
				  }
				  const data = await response.json();
				  console.log(data);
				  return true;
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			leerAsesor: async () => {
				let store = getStore()
				const opts = {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  }
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/asesor`,
					opts
				  );
		
				  if (response.ok) {
					console.log(response);
					const data = await response.json();
					setStore({
					  user: data
					});
				  }
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			leerTip: async () => {
				let store = getStore()
				const opts = {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  }
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/blog`,
					opts
				  );
		
				  if (response.ok) {
					console.log(response);
					const data = await response.json();
					setStore({
					  user: data
					});
				  }
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			signupTip: async (data) => {
				console.log(data);
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(data),
				};
		
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/blog`,
					opts
				  );
		
				  if (!response.ok) {
					console.log(response);
					return false;
				  }
				  const data = await response.json();
				  console.log(data);
				  return true;
				} catch (error) {
				  console.log(error);
				  return false;
				}
			},

			editarTip: async (data) => {
				let store = getStore()
				const opts = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  },
				  body: JSON.stringify(data)
				};
				
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/blog`,
					opts
				  );
		
				  if (!response.ok) {
					console.log(response);
					return false;
				  }
				  const data = await response.json();
				  console.log(data);
				  return true;
				} catch (error) {
				  console.log(error);
				  return false;
				}
			  },

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
