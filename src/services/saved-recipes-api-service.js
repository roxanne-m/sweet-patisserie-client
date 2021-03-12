import config from '../config';
import TokenService from './token-service';

const SavedRecipesApiService = {
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}/dashboard`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default SavedRecipesApiService;
