/**
 * @param {number[][]} heightMap
 * @return {number}
 */
const trapRainWater = function(heightMap) {

    function PriorityQueueMin(){
      let heap=[null]
      function swim(idx){
        if(idx<2)return
        let k=Math.floor(idx/2)
        if(heap[idx][2]-heap[k][2]<0){
          swap(heap,idx,k)
          idx=k
          swim(idx)
        }
      }
      function sink(idx){
        let k=Math.floor(idx*2)
        if(k>=heap.length)return
        if(k<heap.length && heap[k+1] && heap[k][2]-heap[k+1][2]>0) k++
        if(heap[idx][2]-heap[k][2]>0){
          swap(heap,idx,k)
          idx=k
          sink(idx)
        }
      }
      function swap(arr,i,j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
      this.insert=function (v) {
        heap.push(v)
        swim(heap.length-1)
      }
      this.delMin=function () {
        swap(heap,1,heap.length-1)
        let min=heap.pop()
        sink(1)
        return min
      }
      this.isEmpty=function () {
        return heap.length===1
      }
    }
  
    let pq=new PriorityQueueMin()
    let visited=[]
    for(let i=0;i<heightMap.length;i++){
      visited[i]=[]
      for(let j=0;j<heightMap[0].length;j++){
        if((i>0 && i<heightMap.length-1) && (j>0 && j<heightMap[0].length-1))continue
        pq.insert([i,j,heightMap[i][j]])
        visited[i][j]=true
      }
    }
  
    let max=-Infinity,count=0
    while(!pq.isEmpty()){
      let cur=pq.delMin()
      if(cur[2]>max)max=cur[2]
      check(cur[0],cur[1])
    }
    function check(row,col){
      let step=[[-1,0],[1,0],[0,-1],[0,1]]
      for(let i=0;i<step.length;i++){
        let newR=row+step[i][0],newC=col+step[i][1]
        if((newR<0 || newR>=heightMap.length) || (newC<0 || newC>=heightMap[0].length))continue
        if(visited[newR][newC])continue
        visited[newR][newC]=true
        let newVal=heightMap[newR][newC]
        if(newVal<max){
          count+=max-newVal
          check(newR,newC)
        }else{
          pq.insert([newR,newC,newVal])
        }
      }
    }
  
    return count
  };
