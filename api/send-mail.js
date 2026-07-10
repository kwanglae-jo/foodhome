const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, phone, region_si, region_gu, budget, message } = req.body || {};

  if (!name || !phone || !region_si) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: undefined,
      subject: `[샤브광 가맹문의] ${name}님 (${region_si} ${region_gu || ''})`,
      text: [
        `이름: ${name}`,
        `연락처: ${phone}`,
        `희망 지역: ${region_si} ${region_gu || ''}`,
        `창업 가능 예산: ${budget || '미입력'}`,
        `문의 내용: ${message || '없음'}`,
      ].join('\n'),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};
