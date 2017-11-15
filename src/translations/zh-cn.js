if (!window.Translations) window.Translations = {};

window.Translations['zh-cn'] = {

  // common
  PREV_PAGE: '上一页',
  NEXT_PAGE: '下一页',

  TOTAL: '总',
  HEIGHT: '高度',
  DATE: '日期',
  PRODUCER: '生产者',
  TRANSACTIONS: '交易',
  AMOUNTS: '金额',
  FEES: '费用',
  REWARDS: '奖励',
  TYPE: '类型',
  SENDER: '发送者',
  RECIPIENT: '接受者',
  SECOND_PASSWORD: '二级密码',
  REMARK: '备注',
  REMARK_TIP: '长度范围：',

  // transaction type filter
  TRS_TYPE_TRANSFER: '转账',
  TRS_TYPE_SECOND_PASSWORD: '二级密码',
  TRS_TYPE_DELEGATE: '受托人',
  TRS_TYPE_VOTE: '投票',
  TRS_TYPE_MULTISIGNATURE: '多重签名',
  TRS_TYPE_DAPP: '注册应用',
  TRS_TYPE_DEPOSIT: '应用充值',
  TRS_TYPE_WITHDRAWAL: '应用提现',
  TRS_TYPE_STORAGE: '存储',
  TRS_TYPE_UIA_ISSUER: '注册发行商',
  TRS_TYPE_UIA_ASSET: '注册资产',
  TRS_TYPE_UIA_FLAGS: '资产设置',
  TRS_TYPE_UIA_ACL: '资产访问控制',
  TRS_TYPE_UIA_ISSUE: '资产发行',
  TRS_TYPE_UIA_TRANSFER: '资产转账',
  TRS_TYPE_LOCK: '锁仓',

  // application
  DAPP_ICON: '图标',
  DAPP_NAME: '名称',
  DAPP_DESCRIPTION: '描述',
  DAPP_CATEGORY: '类型',
  DAPP_SOURCE_CODE: '源码',
  DAPP_DOWNLOAD: '点击下载',
  DAPP_LIST: '应用列表',
  DAPP_INSTALL_LIST: '已安装应用列表',
  DAPP_TRANSACTION_RECORD: '交易记录',
  DAPP_DEPOSIT: '充值',
  DAPP_BANLANCE_DETAIL: '余额详情',
  DAPP_DETAIL: '详情',
  // dapp category filter
  DAPP_CATEGORY_COMMON: '通用',
  DAPP_CATEGORY_BUSINESS: '商业',
  DAPP_CATEGORY_SOCIAL: '社交',
  DAPP_CATEGORY_EDUCATION: '教育',
  DAPP_CATEGORY_ENTERTAINMENT: '娱乐',
  DAPP_CATEGORY_NEWS: '新闻',
  DAPP_CATEGORY_LIFE: '生活',
  DAPP_CATEGORY_UTILITIES: '工具',
  DAPP_CATEGORY_GAMES: '游戏',
 

  // blockchain browser
  LATEST_BLOCK: '最新区块',
  INPUT_SEARCH_CONTENT: '输入搜索内容',

  // block forging
  DELEGATE_INFO: '受托人基本信息',
  DELEGATE_REGISTER: '注册受托人',
  FORGING_ENABLE: '已开启',
  FORGING_DISABLE: '未开启',
  TOTAL_EARNINGS: '总收益',
  RANKING: '排名',
  PRODUCTIVITY: '生产率',
  APPROVAL: '得票率',
  PRODUCED_BLOCKS: '生产的区块',

  // header
  HOME: '首页',
  PERSONAL: '个人中心',
  APPLICATIONS: '应用中心',
  FORGING: '区块生产',
  BLOCKS: '区块浏览',
  VOTE: '投票',
  TRANSFER: '转账',
  PEERS: '节点',
  ASSET: '资产',

  // home
  BALANCE: '余额',
  LATEST_BLOCK_HEIGHT: '最后区块高度',
  VERSION_INFO: '版本信息',
  MY_TRSACTIONS: '我的交易',

  // login
  INPUT_PASSWORD: '输入主密码',
  KEEP_SESSION: '保持登录状态',
  LOGIN: '登录',
  NEW_ACCOUNT: '新账户',
  STEP: '步骤',
  CREATE_MASTER_PASSWORD: '创建主密码',
  NEW_PASSWORD: '新的主密码',
  NEW_PWD_TIP_1: '系统为您生成了足够安全的新密码，下一步将会要求您重复输入以确认密码',
  NEXT_STEP: '下一步',
  SAVE_PASSWORD: '保存主密码',
  CONFIRM_PASSWORD: '确认主密码',
  INPUT_PASSWORD_AGAIN: '请重新输入您的主密码',
  NEW_PWD_TIP_2: '请确保您已安全保存主密码，如果您失去您的主密码，您的帐户将永远无法再打开，您将失去您所有的XAS',
  CONFIRM: '确认',
  CANCEL: '返回',

  // transfer/pay
  SEND: '发送',
  PAY_TIP: '请确保您正在发送XAS给正确的地址，本操作无法撤消',

  // peers
  PEER_LIST: '节点列表',
  OPERATING_SYSTEM: '操作系统',
  VERSION: '版本',
  // ASSET: '资产'
  REGISTERED_PUBLISHER:'注册发行商',
  REGISTERED_ASSETS:'注册资产',
  VALUE:'值',
  MY_ASSETS:'我发行的资产',
  OPERATION_RECORD:'操作记录',
  ISSUE_NUMBER:'本次发行量',
  ASSET_NAME:'资产名称',
  ACCESS_CONTROL:'权限控制',
  ASSET_PROFILE:'资产概况',
  MAXIMUM:'最大发行量',
  PRECISION:'精度',
  QUANTITY:'当前存量',
  CANCELLATION:'注销',
  OPERATION:'操作',
  DESCRIBE:'描述',
  TOPLIMIT: '上限',
  ACCURACY: '精度',
  STRATEGY: '策略',
  CURRENT_MODE: '当前模式',
  ADD_LIST: '新增名单',
  CURRENT_LIST: '当前名单',
  UPDATE_ACL: '更新ACL',
  // personal
  ACCOUNT_INFO: '账户信息',
  ACCOUNT_LOCK_TIP: '在到达此高度后解锁',
  LOCK_POSITION: '锁仓',
  ACCOUNT_TYPE_HINT: '请输入高度',
  ACCOUNT_TYPE2_HINT: '请输入二级密码',
  LOCK_POSITION_TITLE: '设置锁仓信息',
  QUIT: '退出系统',
  BASIC_INFO: '基本信息',
  ADDRESS: '地址',
  PUBLIC_KEY: '公钥',
  ALREADY_SET_TPI: '您已经设置过二级密码',
  ALREADY_SET_POSITIONLOCK: '您已经进行过锁仓设置',
  SET_SECOND_PASSWORD: '设置二级密码',
  PASSWORD_RULE_TIP: '输入8到16位数字和字母组合',
  INPUT_AGAIN: '再次输入',
  PASSWORD: '密码',
  SUBMIT_SECOND_PASSWORD_TIP: '请确定您已经安全保存了二级密码，一旦丢失，您在Asch系统中的财产将无法找回，设置二级密码需要5XAS手续费',
  SUBMIT: '提交',
  ALREADY_SET: '已设置',
  NOT_SET: '未设置',
  NOT_SET_BLOCKHEIGHT: '未锁仓',
  NOT_SET_ALREADYUNBLOCK: '已解锁',
  POSITIONLOCK_INFO: '锁仓状态',

  // vote
  DELETE: '删除',
  DELEGATE_LIST: '受托人列表',
  VOTE_RECORD: '投票记录',
  MY_VOTERS: '谁投了我',
  DELEGATE: '受托人',
  PRODUCED_NUMBER: '生产块数',
  USERNAME: '用户名',
  WEIGHT: '权重',
  TOTAL_PEOPLES: '共{{count}}人',

  // model - account detail
  ACCOUNT_DETAIL: '账户详情',

  // model - delegate register
  REGISTER_DELEGATE: '注册为受托人',
  DELEGATE_NAME: '受托人名称',
  INPUT_DELEGATE_NAME: '请输入受托人名称',
  DELEGATE_NAME_RULE_TIP: '至少8为数字和字母组合',
  REGISTER: '注册',
  NEED_PAY: '需要支付',

  // model - block detail
  BLOCK_DETAIL: '区块详情',
  TIME: '时间',
  PREVIOUS_BLOCK: '上一块',
  TRANSACTIONS_COUNT: '交易数',
  TOTAL_AMOUNTS: '交易总额',
  PAYLOAD_HASH: '摘要',
  PRODUCER_PUBKEY: '生产者公钥',

  // model - transaction detail/dealinfo
  TRANSACTION_INFO: '交易信息',
  CONFIRMATIONS: '确认数',

  // model - delete vote
  DELETE_VOTE_TITLE: '取消给受托人的投票',
  DELETE_VOTE_TIP: '每次可最多同时删除对33人的投票',

  // model - vote
  VOTE_TITLE: '投票给受托人',
  VOTE_TIP: '请确认您的选择与投票，每张票最多可以同时投33人',

  // toast errors
  ERR_INPUT_PASSWORD: '请输入密码',
  ERR_VIOLATE_BIP39: '密码格式不符合BIP39安全规范',
  ERR_SERVER_ERROR: '服务器错误',
  ERR_PASSWORD_NOT_EQUAL: '您输入的主密码不一致',
  ERR_DELEGATE_NAME_EMPTY: '受托人名称不能为空',
  ERR_DELEGATE_NAME_ADDRESS: '受托人名称不能为账户地址',
  ERR_DELEGATE_NAME_FORMAT: '受托人名称格式不正确',
  ERR_SECOND_PASSWORD_FORMAT: '二级密码输入格式不正确',
  ERR_NO_RECIPIENT_ADDRESS: '必须输入接收地址',
  ERR_RECIPIENT_ADDRESS_FORMAT: '接收地址格式不正确',
  ERR_RECIPIENT_EQUAL_SENDER: '接受地址与发送地址不能相同',
  ERR_AMOUNT_INVALID: '发送金额输入不正确',
  ERR_BALANCE_NOT_ENOUGH: '余额不足',
  ERR_NO_SECND_PASSWORD: '必须输入二级密码',
  ERR_TWO_INPUTS_NOT_EQUAL: '两次输入不一致',
  ERR_PASSWORD_INVALID_FORMAT: '密码格式不正确',
  ERR_AT_LEAST_SELECT_ONE_DELEGATE: '请选择一位受托人',
  ERR_DELETE_NO_MORE_THAN_33: '一次删除至多33位候选人',
  ERR_VOTE_NO_MORE_THAN_33: '一次投票至多33位候选人',
  ERR_POSITIONLOCK_EMPTY: '请输入内容',
  ERR_POSITIONLOCK_NOT_NUM: '请确认输入的是否为数字，并且范围在(1~ 10 000 000)之间',
  ERR_INVALID_REMARK: '备注输入内容不正确',
  ERR_NO_BALANCE: '余额不足，请先充值',
  ERR_NO_DEPOSIT_COIN: '请选择充值的币种',

  // toast info
  INF_REGISTER_SUCCESS: '注册成功',
  INF_DELETE_SUCCESS: '删除成功',
  INF_TRANSFER_SUCCESS: '转账成功',
  INF_OPERATION_SUCCEEDED: '操作成功',
  INF_VOTE_SUCCESS: '投票成功',
  INF_SECND_PASSWORD_SET_SUCCESS: '二级密码设置成功',
  INF_POSITIONLOCK_SET_SUCCESS: '锁仓成功',

  ALLOW_WWB: '是否允许注销/白名单/黑名单',
  ALLOW_WRITEOFF: '是否允许注销',
  ALLOW_WHITELIST: '是否允许白名单',
  ALLOW_BLACKLIST: '是否允许黑名单',
  ALLOW: '允许',
  NOT_ALLOW: '不允许',

  // FRAGIL SET
  FRAGIL_PRE: '账户将在区块高度大于 ',
  FRAGIL_LAT: ' 后解锁',
  FRAGIL_ABOUT: '大约在',
  FRAGIL_DAY: '天',
  FRAGIL_HOUR: '时',
  FRAGIL_MIN: '分',
  FRAGIL_SEC: '秒',
  FRAGIL_RANGE: '锁仓高度应大于当前区块高度，并且锁仓周期少于10000000个区块间隔',
  FRAGIL_UNLOCK: '后解锁',

  //deposit
  DEPOSIT_COIN_TYPE: '选择充值所使用的币种',
  DEPOSIT_AMOUNT: '填写充值数量',
  DEPOSIT_SUCCESS: '充值成功',
  
  DAPP_SUPPORT_COIN: '支持的币种',
  DAPP_COIN_TOTAL_AMOUNT: '总量',
  DAPP_COIN_CURRENT_QUANTITY: '当前流通量',
  DAPP_COIN_BALANCE: 'DAPP余额',
  DAPP_COIN_FEE: '本次充值手续费: 0.1 xas',

  // 调教时间
  ADJUST_TIME_YOURSELF: '您本地时间与系统时间差别过大，请手动调校时间',
  ADJUST_TIME: '正在调校时间，请勿进行其他操作',

  // qrcode
  QRCODE: '主密钥二维码',
  QRCODE_ADDRESS: '您的地址',
  CLICK_TO_SHOW: '点击获取',
  QRCODE_CLOSE: '点击二维码关闭'
};