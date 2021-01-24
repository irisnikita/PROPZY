import { services } from '../services';
import { appConfig } from '../../constant';

export function create(params) {
    return services.create({ ...params, API: appConfig.API + '/users/register' });
}
export function createOrders(params) {
    return services.create({ ...params, API: appConfig.API + '/orders' });
}
export function get(params) {
    return services.get({ ...params, API: appConfig.API + '/users' });
}
export function getList(params) {
    return services.getList({ ...params, API: appConfig.API + '/users/get-users' });
}
export function del(params) {
    return services.del({ ...params, API: appConfig.API + '/users/delete' });
}
export function delAll(params) {
    return services.create({ ...params, API: appConfig.API + '/users/delete-all' });
}
export function update(params) {
    return services.update({ ...params, API: appConfig.API + '/users' });
}