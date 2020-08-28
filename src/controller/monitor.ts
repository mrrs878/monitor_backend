import { Controller, Get, Param, Put, Req, Body, Post, Query } from '@nestjs/common';
import MonitorService from '../service/monitor';

@Controller('/monitor')
export default class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Post('/')
  reportError(@Body() body, @Req() req) {
    console.log(req.body);
    return this.monitorService.report(body);
  }

  @Get('/')
  reportError1(@Req() req) {
    console.log(JSON.parse(decodeURI(req?.url.match(/error=([\s\S]+)/)[1])));
    return this.monitorService.report('');
  }
}
