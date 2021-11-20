import * as nodemailer from "nodemailer";
import Mail from 'nodemailer/lib/mailer';
import { config } from '../config/index';

interface SendMailOptions {
	from?: string;
	to: string;
	subject: string;
	html: string;
}

export async function SendMail(options: SendMailOptions) {
  const transporter = nodemailer.createTransport({
    service: config.mailer.service,
    port: 587,
    auth: {
	  user: config.mailer.user,
      pass: config.mailer.password,
    },
});

  const mailOptions: Mail.Options = {
    from: options.from || '"Beginner Blog⚡!" <beginnerblogv1@gmail.com>',
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  return transporter.sendMail(mailOptions, function(err) {
    if (err) {
      console.error(err);
    }
  });
}
