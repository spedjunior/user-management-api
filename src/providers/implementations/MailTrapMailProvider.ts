import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailTrapMailProvider implements IMailProvider {
    private transporter; 
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT) || 587 ,
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASSWORD
            }

        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}

