import { requestGet} from "../utils/requestAPI";

export const app = {
    state: {
        name:'',
        informations: {},
    },
    reducers: {
        setName(state, name) {
            return {...state, name};
        },
        setInformations(state, informations) {
            return {...state, informations};
        },
    },
    effects:(dispatch) => ({
        async getMeteoInformations() {
            const response = await requestGet('weather', 'q=valence');
            if (response) {
                this.setInformations(response);
            }
        }
    })
};