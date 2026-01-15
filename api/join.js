// api/join.js - 完整版本
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: '只允许POST请求'
    });
  }

  try {
    const {
      name,
      age,
      email,
      qq,
      expertise,
      version,
      experience,
      playTime,
      portfolio,
      introduction
    } = req.body;
    
    // 验证必填字段
    if (!name || !age || !email || !qq || !expertise || !version || !introduction) {
      return res.status(400).json({
        success: false,
        message: '请填写所有必填字段'
      });
    }

    // 年龄验证
    if (parseInt(age) < 12) {
      return res.status(400).json({
        success: false,
        message: '申请人需年满12周岁'
      });
    }

    // 🎯 完整日志 - 所有字段都会显示
    console.log('===================== 新的北境团队申请 =====================');
    console.log('📝 基本信息:');
    console.log('   姓名/ID:', name);
    console.log('   年龄:', age);
    console.log('   邮箱:', email);
    console.log('   QQ:', qq);
    
    console.log('🎮 游戏信息:');
    console.log('   擅长领域:', expertise);
    console.log('   游戏版本:', version);
    console.log('   游戏经验:', experience);
    console.log('   每周时间:', playTime);
    
    console.log('📁 作品展示:');
    console.log('   ', portfolio || '未提供');
    
    console.log('💬 自我介绍:');
    // 限制长度，避免日志太长
    const shortIntro = introduction.length > 500 
      ? introduction.substring(0, 500) + '...' 
      : introduction;
    console.log('   ', shortIntro);
    
    console.log('⏰ 申请时间:', new Date().toLocaleString('zh-CN'));
    console.log('🌐 IP地址:', req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    console.log('====================================================================');

    // 返回成功
    return res.status(200).json({
      success: true,
      message: '🎉 申请提交成功！我们将在3-5个工作日内审核您的申请，请保持QQ/邮箱畅通。'
    });

  } catch (error) {
    console.error('❌ 表单处理错误:', error);
    return res.status(500).json({
      success: false,
      message: '服务器内部错误，请稍后重试'
    });
  }
}
