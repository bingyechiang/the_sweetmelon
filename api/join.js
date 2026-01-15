// api/join.js - 修正版
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const data = req.body;
    
    // 最简单的验证
    if (!data.name || !data.qq) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // 🎯 添加日志：在Vercel控制台可以看到
    console.log('🎮 新的申请：', {
      姓名: data.name,
      QQ: data.qq,
      邮箱: data.email || '未填',
      擅长: data.expertise || '未选',
      时间: new Date().toLocaleString('zh-CN')
    });

    // 直接返回成功
    return res.status(200).json({
      success: true,
      message: '申请提交成功！'
    });

  } catch (error) {
    console.error('❌ Error:', error);
    return res.status(500).json({
      success: false,
      message: '服务器内部错误'
    });
  }
}
