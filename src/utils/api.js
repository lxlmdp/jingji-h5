

const SERVER = 'http://118.190.40.178:7070/'

//登录
const LOGIN = SERVER + '/app/login';

//日报查询
export const REPORTWORDOUTLISTPAGE = SERVER + 'app/service?METHOD=reportWord_reportWordOutlistPage'
// 日报详情页
export const FINDREPORTWORDBYID= SERVER + 'app/service?METHOD=reportWord_findReportWordById'

//收藏文件详情
export const  FILEINFO = SERVER + 'app/service?METHOD=staff_file_info'

//修改密码
export const CHANGEPSW = SERVER+ 'app/service?METHOD=staff_editpwd'

//获取指标
export const  APPINDEXS = SERVER + 'app/service?METHOD=app_indexs'

//查询指标
export const  INDEXTABLE = SERVER + 'app/service?METHOD=app_index_table'

//运行信息列表分页（运行信息）

export const  RELLIST = SERVER + 'app/service?METHOD=operation_rel_list'

//运行信息查看详情并标记已读（运行信息）

export const RELINFO = SERVER + 'app/service?METHOD=operation_rel_info'

//App首页未读和收藏消息数量（首页）

export const APPINDEXCOUNT = SERVER + 'app/service?METHOD=appIndexCount'

//收藏（运行信息，日报）

export const FILESAVE = SERVER + '/app/service?METHOD=staff_file_save'

//取消收藏
export const UPDATEIFDELETE = SERVER + '/app/service?METHOD=updateIfDelete'



//相关文件列表（运行信息，日报）

export const FILELIST = SERVER + 'app/service?METHOD=staff_file_list'

//获取用户信息

export const USERINFO= SERVER + 'app/service?METHOD=user_info_api'