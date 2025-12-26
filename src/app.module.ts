import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { MypageModule } from './mypage/mypage.module';

@Module({
  imports: [BoardModule, MypageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
