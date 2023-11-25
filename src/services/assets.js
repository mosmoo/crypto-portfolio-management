import api from "./apiConfig"
// We are doing postman stuff but coding it.
export const getAssets = async () => {
    try {
        const assets = await api.get('/assets?limit=150')
        return assets.data
    } catch (error) {
        console.log('Error:getting all assets: ', error)
    }
}
export const getAsset = async (id) => {
    try {
        const response = await api.get(`/assets/${id}?limit=150`)
        return response.data
    } catch (error) {
        console.log('Error: getting one asset: ', error)
    }
}
// export const createAsset = async (assetData) => {
//     try {
//         const response = await api.post('/cats', catData)
//         return response.data
//     } catch (error) {
//         console.log('Error: creating one cat: ', error)
//     }
// }
// export const editCat = async (id , catData) => {
//     try {
//         const cats = await api.put(`/cats/${id}`, catData)
//         return cats.data
//     } catch (error) {
//         console.log('Error:editing one cat: ', error)
//     }
// }
// export const deleteCat = async (id) => {
//     try {
//       const response = await api.delete(`/cats/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };
