/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { Model } from 'mongoose';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/IStudent';
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<IStudent>);
    createStudent(createStudentDto: CreateStudentDto): Promise<IStudent>;
    updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent>;
    getAllStudents(): Promise<IStudent[]>;
    getStudent(studentId: string): Promise<IStudent>;
}
