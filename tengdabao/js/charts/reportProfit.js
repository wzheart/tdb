var timeTicket;

// Step:3 conifg ECharts's path, link to echarts.js from current page.
    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
    require.config({
        paths: {
            echarts: '../../component/echarts-m/dist'
        }
    });
    
    // Step:4 require echarts and use it in the callback.
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
        [
            'echarts',
            'echarts/chart/line'
        ],
        function (ec) {
            //--- 折柱 ---
            var myChart = ec.init(document.getElementById('reportProfitCharts'));
            myChart.setOption({
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['本月','上证']
                },
                toolbox: {
                    show : true,
                    y : 'top',
                    itemSize : 14,
                    feature : {
//                      mark : {show: true},
//                      dataView : {show: true, readOnly: false},
//                      magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true}
//                      saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [{
				            type : 'category',
				            boundaryGap : false,
				            axisLine: {onZero: false},
				            data : (function (){
				                var now = new Date();
				                var res = [];
				                var len = 2880;
				                while (len--) {
				                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
				                    now = new Date(now - 5000);
				                }
				                return res;
				            })()
				        }
//                  {
//                      type : 'category',
//                      boundaryGap : true,
////                      data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
//						data :　(function (){
//					                var now = new Date();
//					                var res = [];
//					                var len = 10;
//					                while (len--) {
//					                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
//					                    now = new Date(now - 1000);
//					                }
//					                return res;
//					            })()
//                  }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitArea : {show : true},
                        min : 16000,
                        max : 19000,
                        scale :true,
                        splitLine :false,
                        smooth : true
                    }
                ],
                series : [
                    {
                        name:'本月',
                        type:'line',
//                      smooth:true,
//          			itemStyle: {normal: {areaStyle: {type: 'default'}}},
//                      data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
						data: (function (){
			                var res = [];
			                var len = 1;
			                while (len--) {
//			                    res.push((Math.random()*22 + 5));
								res.push(18000);
			                }
			                return res;
			            })() 
                   }
                ]
            });
        }
    );
    
 

