// api/join.js - 最简单版本
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

    // 直接返回成功，不做任何存储
    return res.status(200).json({ 
      success: true, 
      message: '申请提交成功！' 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}
