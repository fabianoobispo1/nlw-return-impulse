import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4a2544e845d5a2",
      pass: "3086230b498481"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe w <oi@w.com>',
            to: 'Fabiano Bispo  <fbc623@gmail.com>',
            subject,
            html: body,
        })
    };
}