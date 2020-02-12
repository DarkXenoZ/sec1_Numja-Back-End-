import { Injectable } from '@nestjs/common';
import { UserStatus } from '../enum/user.enum';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AdminService {
    constructor(private readonly userService: UserService) {}

    suspend(id: string) {
        return this.userService.update(id, { status: UserStatus.Suspended });
    }

    reactivate(id: string) {
        return this.userService.update(id, { status: UserStatus.Active });
    }
}
