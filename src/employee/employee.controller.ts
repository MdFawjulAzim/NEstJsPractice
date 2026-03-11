/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }
    @Get()
    findAll() {
        return this.employeeService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.employeeService.findOne(Number(id));
    }
}
