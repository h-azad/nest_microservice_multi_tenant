import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => {
    console.log('role', roles);
    
    return SetMetadata(ROLES_KEY, roles);
};
