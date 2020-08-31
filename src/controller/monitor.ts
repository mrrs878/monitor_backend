/*
 * @Author: your name
 * @Date: 2020-08-25 16:44:29
 * @LastEditTime: 2020-08-31 18:44:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor_backend\src\controller\monitor.ts
 */
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
