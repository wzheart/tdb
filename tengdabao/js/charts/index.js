var timeTicket;

// Step:3 conifg ECharts's path, link to echarts.js from current page.
    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
    require.config({
        paths: {
            echarts: './component/echarts-m/dist'
        }
    });
    
    // Step:4 require echarts and use it in the callback.
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/map'
        ],
        function (ec) {
            //--- 折柱 ---
            var myChart = ec.init(document.getElementById('moneyCharts'));
            myChart.setOption({
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['总金额']
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
                        name:'总金额',
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
            
            	
                
					var lastData = 11;
					var axisData;
					var i = 18000;
					clearInterval(timeTicket);
					timeTicket = setInterval(function (){
					    lastData += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
					    lastData = lastData.toFixed(1) - 0;
					    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
					    // 动态数据接口 addData
					    myChart.addData([
					        
					        [
					            0,        // 系列索引
					            i, // 新增数据
					            false,    // 新增数据是否从队列头部插入
					            true    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//					            axisData  // 坐标轴标签
					        ]
					    ]);
					    i = i + 1;
//					    myChart.refresh();
//						myChart.setOption(false);
					}, 100);
					
            
        }
    );
    
 

