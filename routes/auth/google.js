import { authorize, callbackAuthorization } from '../../services/auth/google.js';

export default {
    "/":         ['get', authorize()],
    "/callback": ['get', callbackAuthorization()]
};
