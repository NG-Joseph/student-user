import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home.html') //indicate the template to render
  getHome(): {} {
    return this.appService.getHome();
  }

  @Get('about-us')
  @Render('about-us.html') //indicate the template to render
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }

  @Get('register')
  @Render('users/create-user.html') //indicate the template to render
  getRegister(): {} {
    return this.appService.getRegister();
  }
  
  @Get('register')
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Here we will create another route relative to the controller's base root /
   */
  @Get('hello2')
  @Render('index.html') //indicate the template to render
  getHello2(): {} {
    return this.appService.getHello2(); //the object returned will be passed to the template to render
  }
}
