import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { UserRepository } from '../repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';

const mockJwtConfig = {
  secret: 'mock-secret-key',
  expiresIn: 3600,
};

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: mockJwtConfig.secret,
          signOptions: {
            expiresIn: mockJwtConfig.expiresIn,
          },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, UserRepository],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});