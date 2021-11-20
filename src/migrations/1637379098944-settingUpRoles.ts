import { RoleEntity } from './../entities/role.entity';
import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

export class settingUpRoles1637379098944 implements MigrationInterface {
	roles = [ 'ADMIN', 'USER', 'WRITER', 'MODERATOR'];

    public async up(queryRunner: QueryRunner): Promise<void> {
		const repository = getRepository(RoleEntity);
		for (const role of this.roles) {
			const roleEntity = new RoleEntity();
			roleEntity.name = role;
			roleEntity.description = `ROLE description of ${role}`;
			await repository.save(roleEntity);
		}
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		const repository = getRepository(RoleEntity);
		for (const role of this.roles) {
			await repository.delete({ name: role });
		}
    }

}
